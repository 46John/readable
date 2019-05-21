import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown, faComment, faUser } from '@fortawesome/free-solid-svg-icons'


import Sidebar from './Sidebar';

class HomeView extends Component {
    state = {
        posts : {},
        sortedBy : "votes"
    }
    componentDidMount(){
        this.setState({
            posts : this.props.posts,
        })
    }

    handleSorting = (e) => {
        if(this.state.sortedBy !== e.target.value){
            let newPostSort = this.state.posts;
            switch(e.target.value){
                case "votes":
                    newPostSort = newPostSort.sort((a, b) => b.voteScore - a.voteScore);
                    return;
                case "time":
                    newPostSort = newPostSort.sort((a, b) => b.timestamp - a.timestamp);
                    return;
            }
            this.setState({
                posts : newPostSort,
                sortedBy : e.target.value
            })
        }
    }
    render(){
        const { posts } = this.props;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="d-flex justify-content-between">
                            <p>Home View</p>
                                <select
                                    name="sort"
                                    id="homeSort"
                                    onChange={(e) => this.handleSorting(e)}
                                    value={this.state.sortedBy}
                                >
                                    <option value="votes">Highest Votes First</option>
                                    <option value="time">Most Recent</option>
                                </select>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {posts.length > 0 && posts.map((post, index)=>(

                                        <article className="post-summary text-left " key={index}>
                                            <div className="d-flex flex-row">
                                                <div className="post-summary__votes">
                                                    <FontAwesomeIcon icon={faLongArrowAltUp}/>
                                                    <p>{post.voteScore}</p>
                                                    <FontAwesomeIcon icon={faLongArrowAltDown}/>
                                                </div>
                                                <h1>
                                                    <Link to={`/post:${post.id}`}>
                                                        {post.title}
                                                    </Link>
                                                </h1>
                                            </div>
                                            <div className="post-summary__details w-100 d-flex flex-row">
                                                <p><FontAwesomeIcon icon={faComment}/> 8</p>
                                                <p><FontAwesomeIcon icon={faUser}/> {post.author}</p>
                                                <a href="#">Edit</a>
                                            </div>
                                        </article>

                                ))}
                            </div>
                        </div>
                    </div>
                    <Sidebar>
                        <p>My Sidebar</p>
                    </Sidebar>
                </div>

            </div>
        )
    }
}

function mapStateToProps({posts}){
    return {
        posts : posts.sort((a, b) => b.voteScore - a.voteScore)
    }
}

export default connect(mapStateToProps)(HomeView);
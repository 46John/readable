import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './Navigation';
import HomeView from './HomeView';
import CategoryView from './CategoryView';
import NewPostView from './NewPostView';
import PostSingleView from './PostSingleView';

import '../App.scss';
import {handleInitialData} from "../actions/shared";

class App extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(handleInitialData());
    }
    render(){
        return (
            <Router>
                <Fragment>
                    <Navigation/>
                    <Route path="/" exact component={HomeView}/>
                    <Route path="/category" component={CategoryView}/>
                    <Route path="/new" component={NewPostView}/>
                    <Route path="/post:post_id" component={PostSingleView}/>
                </Fragment>
            </Router>
        );
    }

}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(App);

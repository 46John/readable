import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <Link to={`/`} className="my-0 mr-md-auto font-weight-bold">
                        <h5 >Readable</h5>
                    </Link>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link to={`new`} className="btn btn-primary">New Post</Link>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navigation;
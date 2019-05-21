import React, { Component } from 'react';

class Sidebar extends Component {
    render(){
        return(
            <div className="col-4">
                {this.props.children}
            </div>
        )
    }
}
export default Sidebar;
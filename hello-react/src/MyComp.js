import React, { Component } from 'react';

class MyComp extends Component {

    constructor(props){
        super(props);
        this.str= "Hello,React!";
    }
    render() {
        return (
            <div>
                <h3>
                    {this.str}
                </h3>
            </div>
        );
    }
}

export default MyComp;

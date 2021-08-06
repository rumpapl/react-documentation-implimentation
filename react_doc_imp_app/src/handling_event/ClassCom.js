import React, { Component } from 'react'

export default class ClassCom extends Component {

    constructor(){
        super();
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick(data) {
        console.log('in handle click');
        console.log('clicked by ' + data);
    };

    render() {
        return (
            <div>
                <span>Class component</span>
                <br />
                <button onClick={() => this.handleClick('User')}>click me</button>
            </div>
        )
    }
}

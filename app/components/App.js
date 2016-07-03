import React from 'react';
import BaseComponent from './BaseComponent';

export default class App extends BaseComponent {
    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <div className="mainContainer">
                <h1>NYT News Titles</h1>
                {this.props.children}
            </div>
        );
    }
}

import React, { Component } from 'react';
import MenuList from "./MenuList";
import {aboutMe} from "./aboutme";
import ReactDOM from 'react-dom';


class resume extends Component {
    constructor(props) {
        super(props);

        this.state = {choice: aboutMe};
        this.changeChoice = this.changeChoice.bind(this);
    }

    changeChoice(newChoice) {
        this.setState({
            choice: newChoice
        });
    }

    render() {
        return (
            <div>Test</div>
            //<MenuList {this.state.choice} onClick={this.changeChoice}/>
        )
    }
}

ReactDOM.render(<resume/>, document.getElementById('app'));
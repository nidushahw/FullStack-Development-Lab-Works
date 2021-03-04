import { Component } from 'react';
import Moment from 'react-moment';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            dateToFormat: new Date()
        }
    }
    render() { 
        return (
            <Moment format="HH:mm:ss" date={this.state.dateToFormat} />
        );
    }
}

export default Timer;
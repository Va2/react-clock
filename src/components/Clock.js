import React, { Component } from 'react';
import './Clock.css';

let newDate = new Date();

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
          day: newDate.getDay(),
          hour: newDate.getHours(),
          minute: newDate.getMinutes(),
          second: newDate.getSeconds()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            day: new Date().getDay(),
            hour: new Date().getHours(),
            minute:  new Date().getMinutes(),
            second: new Date().getSeconds()
        });
    }

    render() {        
        return (
            <div className="clock">

                <div className="clock-screen">
                    <ul className="days">
                        <li className={this.state.day === 1 ? 'active' : ''}>Mon</li>
                        <li className={this.state.day === 2 ? 'active' : ''}>Tue</li>
                        <li className={this.state.day === 3 ? 'active' : ''}>Wed</li>
                        <li className={this.state.day === 4 ? 'active' : ''}>Thu</li>
                        <li className={this.state.day === 5 ? 'active' : ''}>Fri</li>
                        <li className={this.state.day === 6 ? 'active' : ''}>Sat</li>
                        <li className={this.state.day === 0 ? 'active' : ''}>Sun</li>
                    </ul>

                    <ul className="time">
                        <li>{(this.state.hour < 10 ? '0' : '') + this.state.hour}</li>:
                        <li>{(this.state.minute < 10 ? '0' : '') + this.state.minute}</li>{/*:*/}
                        {/* <li>{this.state.second}</li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Clock;
import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            day: new Date().getDay(),
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
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
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        });
    }

    render() {        
        return (
            <div className="clock">

                <div className="clock-screen">
                    <ul className="days">
                        <li id="mon" className={this.state.day === 1 ? 'active' : ''}>Mon</li>
                        <li id="tue" className={this.state.day === 2 ? 'active' : ''}>Tue</li>
                        <li id="wed" className={this.state.day === 3 ? 'active' : ''}>Wed</li>
                        <li id="thu" className={this.state.day === 4 ? 'active' : ''}>Thu</li>
                        <li id="fri" className={this.state.day === 5 ? 'active' : ''}>Fri</li>
                        <li id="sat" className={this.state.day === 6 ? 'active' : ''}>Sat</li>
                        <li id="sun" className={this.state.day === 0 ? 'active' : ''}>Sun</li>
                    </ul>

                    <ul className="time">
                        <li>{this.state.hour}</li>:
                        <li>{this.state.minute}</li>{/*:*/}
                        {/* <li>{this.state.second}</li> */}
                    </ul>

                    {/* Day {this.state.day} <br /> */}
                </div>
            </div>
        )
    }
}

export default Clock;
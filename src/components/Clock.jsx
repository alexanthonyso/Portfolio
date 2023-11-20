import React, { Component } from "react";
import {} from "../styles/components/clock.css";
import ClockIcon from "../assets/logo/ClockIcon.svg";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const time = this.state.time;
    const formattedTime = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div className="clock">
           <img src={ClockIcon} alt="Icône" />
        <p>{formattedTime}</p>
      </div>
    );
  }
}

export default Clock;

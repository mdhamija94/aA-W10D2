import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()};
  }
  tick(){
    this.setState({date: new Date()});
  }

  componentDidMount(){
    this.handle = setInterval(() =>{
      this.tick();
    }, 1000);

  }

  componentWillUnmount(){
    clearInterval(this.handle);
    this.handle = 0;
  }

  render(){

    return(
      <div className="content-container">
        <h1 className="clock-header">Clock</h1>
        <div className="clock-container">
          <ul className="time">
            <li>Time:</li>
            <li>{this.state.date.toTimeString().slice(0, 8)}</li>
          </ul>
          <ul className="date">
            <li>Date:</li>
            <li>{this.state.date.toDateString()}</li>
          </ul>
        </div>
      </div>
    ) 
  }

}

export default Clock;
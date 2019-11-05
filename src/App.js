import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    switcher: false,
    counter: 0,
    red: true
  };

  flip = () => {
    if (this.state.switcher) return;
    setTimeout(() => {
      this.setState({
        red: !this.state.red
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        switcher: !this.state.switcher
      });
    }, 2000);
    this.setState({
      switcher: !this.state.switcher,
      counter: this.state.counter + 1
    });
    this.setState({
      red: !this.state.red
    });
  };

  renderEmoji = c => {
    if (c % 5 === 0) {
      return <span role="img">🖕</span>;
    } else {
      return <span role="img">🤚</span>;
    }
  };

  render() {
    const { switcher, red, counter } = this.state;
    const switchStatus = switcher ? "on" : "off";
    const lightStatus = red ? "red" : "green";
    const counterValue = this.renderEmoji(counter);
    return (
      <div className="App">
        <div className="round centred"></div>
        <div className="box centred">
          <div className="button" onClick={this.flip}>
            <div className={`light centred ${lightStatus}`}></div>
          </div>
          <div className="hatch gap"></div>
          <div className={`hatch cover ${switchStatus}`}></div>
          <div className={`rail ${switchStatus}`}></div>
          <div className="wires top"></div>
          <div className="wires bottom"></div>
          <div className="wires right-1"></div>
          <div className="wires right-2"></div>
          <div className={`arm ${switchStatus}`}>
            <div className="join-1"></div>
            <div className="join-2"></div>
            <div className="hand">
              <h1>{counterValue}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

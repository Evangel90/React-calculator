import React from "react";
import Button from "./components/Button";
import click1 from "./assets/audio/click1.wav";
import click2 from "./assets/audio/click2.wav";
import "./Metronome.css";

const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const operatorButtons = ["/", "-", "="];

class Metronome extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "0",
      operator: null,
      firstValue: ""
    };
  }

  renderNumberButtons = () => {
    let buttonContainers = [];
    for (var i = 0; i < numberButtons.length; i++) {
      buttonContainers.push(
        <Button
          key={`number_${numberButtons[i]}`}
          number={numberButtons[i]}
          onButtonClick={this.handleNumberButtonClick}
        />
      );
    }
    return buttonContainers;
    // return numberButtons.map(number => (
    //   <Button key={`number_${number}`} number={number} />
    // ));
  };

  handleNumberButtonClick = num => {
    const oldStateResultValue = this.state.result;
    if (oldStateResultValue === "0") {
      this.setState({
        result: num.toString()
      });
    } else {
      this.setState({
        result: oldStateResultValue + num
      });
    }
  };

  handleOperatorButtonClick = ops => {
    const { result } = this.state;
    if (ops === "=") {
      this.calculate()
    } else {
      this.setState({
        result: "0",
        operator: ops,
        firstValue: result
      });
    }
  };

  calculate = () => {
    const { result, firstValue, operator } = this.state;
    if (operator === "+") {
      this.setState({
        result: Number(result) + Number(firstValue),
        firstValue: "",
        operator: null
      })
    }
    if (operator === "/") {
      this.setState({
        result: Number(result) + Number(firstValue),
        firstValue: "",
        operator: null
      })
    }
    if (operator === "-") {
      this.setState({
        result: Number(firstValue) - Number(result),
        firstValue: "",
        operator: null
      })
    }
  }

  renderOperatorButtons = () => {
    return operatorButtons.map(ops => (
      <Button
        key={`ops ${ops}`}
        number={ops}
        onButtonClick={this.handleOperatorButtonClick}
      />
    ));
  };

  render() {
    return (
      <React.Fragment>
        <div className="calculator">
          <div className="result">
            <p>{this.state.result}</p>
          </div>
          <div className="calculator-buttons">
            <div>
              <div className="clear-button">
                <span>clear</span>
              </div>
              {this.renderNumberButtons()}
            </div>
            <div className="operator-buttons">
              {this.renderOperatorButtons()}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Metronome;

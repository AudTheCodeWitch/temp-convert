import React, {Component} from 'react';
import TempInput from "./TempInput";

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convert(temp, converter) {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = converter(input)
  const rounded = Math.round(output * 10) / 10;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temp: '', scale: 'c' };
  }

  handleCelsiusChange(temp) {
    this.setState({ scale: 'c', temp });
  }

  handleFahrenheitChange(temp) {
    this.setState({ scale: 'f', temp })
  }

  render() {
    const scale = this.state.scale;
    const temp = this.state.temp;
    const c = scale === 'f' ? convert(temp, toCelsius) : temp;
    const f = scale === 'c' ? convert(temp, toFahrenheit) : temp;

    return (
      <div>
        <TempInput scale="c" temp={c} onChange={this.handleCelsiusChange} />
        <TempInput scale="f" temp={f} onChange={this.handleFahrenheitChange} />
      </div>
  );
  }
}

export default Calculator;

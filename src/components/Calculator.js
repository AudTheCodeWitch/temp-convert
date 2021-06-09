import React, {Component} from 'react';
import TempInput from "./TempInput";
import Convert from "../assets/convert.svg";

const toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

const toFahrenheit = celsius => (celsius * 9 / 5) + 32;

const convert = (temp, converter) => {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = converter(input)
  const rounded = Math.round(output * 10) / 10;
  return rounded.toString();
};

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
      <div className={'w-4/5 my-2 rounded mx-auto p-3 bg-secondary md:flex md:flex-row filter drop-shadow-xl'}>
        <TempInput scale="f" temp={f} onChange={this.handleFahrenheitChange} />
        <img src={Convert} alt="convert temperature" className={'mx-auto my-2 transform rotate-90 md:rotate-0'} />
        <TempInput scale="c" temp={c} onChange={this.handleCelsiusChange} />
      </div>
  );
  }
}

export default Calculator;

import React, {Component} from 'react';
import Degree_F from '../assets/degree_f.svg';
import Degree_C from '../assets/degree_c.svg'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const images = {
  c: Degree_C,
  f: Degree_F
}

class TempInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    const temp = this.props.temp
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temp} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TempInput;

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
      <fieldset className={'md:flex-grow md:mx-6 drop-shadow self-center'}>
        <legend className={'sr-only text-primary appearance-none'}>Degrees {scaleNames[scale]}:</legend>
        <div className={'mx-auto'}>
          <input value={temp}
                 onChange={this.handleChange}
                 className={'h-14 float-left w-10/12 md:w-3/4 text-right text-xl appearance-none border-4 border-transparent rounded py-2 px-4 ' +
                            'text-primary focus:outline-none bg-primary focus:border-primary'} />
          <img src={images[scale]} alt={`degrees ${scaleNames[scale]}`} className={'pl-2 h-14 w-2/12 md:w-1/4'}/>
        </div>
      </fieldset>
    );
  }
}

export default TempInput;

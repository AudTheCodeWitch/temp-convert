import React, {Component} from 'react';
import Moon from '../assets/moon.svg'
import Sun from '../assets/sun.svg'

// Toggles the color scheme class on the root element
class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.state = { mode: 'light' };
  }

  handleModeChange() {
    const mode = this.state.mode
    mode === 'light' ? this.setState({ mode: 'dark' }) : this.setState({mode: 'light'});
  }

  render() {
    const mode = this.state.mode;
    let image;
    if (mode === 'light') {
      image = <img src={Moon} alt={'dark mode moon'} className={'h-10 md:h-12 self-center'}/>;
      document.getElementById('root').className = 'light';
    } else {
      image = <img src={Sun} alt={'light mode sun'} className={'h-10 md:h-12 self-center'}/>
      document.getElementById('root').className = 'dark';
    }
    return (
      <button onClick={this.handleModeChange}>
        {image}
      </button>
    );
  }
}

export default DarkModeToggle;

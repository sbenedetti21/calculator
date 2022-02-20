import React from 'react';
import Calculator from './Calculator.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div id='app'>
          <Calculator />
        </div>
    )
  }
}

export default App;
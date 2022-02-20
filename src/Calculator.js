import React from 'react';
import {evaluate} from "mathjs";
import './calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        display: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.isOperator = this.isOperator.bind(this);
  };

  handleClick(e) {
    let newValue;
    switch (e.target.innerText) {
      case 'AC':
        newValue = '0';
        break;
      case '=':
        newValue = evaluate(this.state.display);
        break;
      case '-':
        newValue = this.state.display + e.target.innerText;
        break;
      case '+':
      case '*':
      case '/':
        if (this.state.display === '0') {break}
        let len = this.state.display.length;
        if (this.isOperator(this.state.display[len-1])) {
          newValue = this.state.display;
          newValue = newValue.slice(0,len-1);
          newValue += e.target.innerText;
        } else {
          newValue = this.state.display + e.target.innerText;
        }
        break;
      case '.':
        if (/\S\./.test(this.state.display)) {newValue = this.state.display} else
        newValue = this.state.display + '.'
        break;
      default:
        if (this.state.display === '0') {
          newValue = e.target.innerText
        } else {
          newValue = this.state.display + e.target.innerText;
        }
        break;
    }
    this.setState({
      display: newValue
    })
  }

  isOperator(char) {
    return char === '/' || char === '*' || char === '-' || char === '+';
  }

  render() {
    return(
        <div className='calculator'>
          <div className='display-calc'>{this.state.display}</div>
          <div className='row-calc'>
            <button id='clear' onClick={this.handleClick}>AC</button>
            <button id='multiply' onClick={this.handleClick}>*</button>
            <button id='divide' onClick={this.handleClick}>/</button>
          </div>
          <div className='row-calc'>
            <button id='one' onClick={this.handleClick}>1</button>
            <button id='two' onClick={this.handleClick}>2</button>
            <button id='three' onClick={this.handleClick}>3</button>
            <button id='add' onClick={this.handleClick}>+</button>
          </div>
          <div className='row-calc'>
            <button id='four' onClick={this.handleClick}>4</button>
            <button id='five' onClick={this.handleClick}>5</button>
            <button id='six' onClick={this.handleClick}>6</button>
            <button id='substract' onClick={this.handleClick}>-</button>
          </div>
          <div className='row-calc'>
            <div className='row-calc' id='last-row'>
              <button id='seven' onClick={this.handleClick}>7</button>
              <button id='eight' onClick={this.handleClick}>8</button>
              <button id='nine' onClick={this.handleClick}>9</button>
              <button disabled id='disabled'></button>
              <button id='zero' onClick={this.handleClick}>0</button>
              <button id='decimal' onClick={this.handleClick}>.</button>
            </div>
            <button id='equals' onClick={this.handleClick}>=</button>
          </div>
        </div>
    )
  }

}
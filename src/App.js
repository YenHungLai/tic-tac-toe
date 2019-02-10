import React, { Component } from 'react';
import './App.css';

let turn = 'A'

class App extends Component {
  handleClick = (event) => {
    if(turn === 'A') {
      document.getElementById(event.target.id).innerHTML = 'O'
      turn = 'B'
    } else if(turn === 'B') {
      document.getElementById(event.target.id).innerHTML = 'X'
      turn = 'A'
    }
  }

  render() {
    return (
      <div className='container mx-auto text-center'>
        <h1 className='text-blue mb-5'>Tic Tac Toe</h1>
        <div className='text-center'>
          <button onClick={this.handleClick} className='border border-black border-8 w-24 h-24' id='1'>
          </button>
          <button onClick={this.handleClick} className='border border-black border-8 w-24 h-24' id='2'></button>
          <button onClick={this.handleClick} className='border border-black border-8 w-24 h-24' id='3'></button>
        </div>
        <div className='text-center'>
          <button onClick={this.handleClick} className='border border-black border-8 w-24 h-24' id='4'></button>
          <button onClick={this.handleClick} className='border border-black border-8 w-24 h-24' id='5'></button>
          <button onClick={this.handleClick} className='border border-black border-8 w-24 h-24' id='6'></button>
        </div>
        <div className='text-center'>
          <button onClick={this.handleClick} className='border border-black border-8 w-24 h-24' id='7'></button>
          <button onClick={this.handleClick} className='border border-black border-8 w-24 h-24' id='8'></button>
          <button onClick={this.handleClick} className='border border-black border-8 w-24 h-24' id='9'></button>
        </div>
      </div>
    );
  }
}

export default App;

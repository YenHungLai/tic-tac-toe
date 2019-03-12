import React, { Component } from 'react';
import './App.css';

let turn = 'A'

class App extends Component {
  handleClick = (event) => {
    if(turn === 'A') {
      if(event.target.name !== 'disable') {
        event.target.innerHTML = '<h2>O</h2>'
        event.target.name = 'disable'
        event.target.title = 'circle'
        event.target.style.color = 'green'
        // console.log(event.target.name);
        turn = 'B'
      }
    } else if(turn === 'B') {
      if(event.target.name !== 'disable') {
        event.target.innerHTML = '<h2>X</h2>'
        event.target.name = 'disable'
        event.target.title = 'cross'
        event.target.style.color = 'red'
        turn = 'A'
      }
    }
  }

  statusCheck = () => {
    let tokenArray = [];
    for(let i = 1; i <= 9; i++) {
      let token = document.getElementById(i).title;
      tokenArray.push(token);
    }
    console.log(tokenArray);
    if (tokenArray[0] === 'circle' && tokenArray[1] === 'circle' && tokenArray[2] === 'circle')
      {
        document.getElementById('1').style.backgroundColor = 'green';
        document.getElementById('2').style.backgroundColor = 'green';
        document.getElementById('3').style.backgroundColor = 'green';
        alert('GAME OVER')
      }
    if (tokenArray[3] === 'circle' && tokenArray[4] === 'circle' && tokenArray[5] === 'circle')
    {
      document.getElementById('4').style.backgroundColor = 'green';
      document.getElementById('5').style.backgroundColor = 'green';
      document.getElementById('6').style.backgroundColor = 'green';
      alert('GAME OVER')
    }
    if (tokenArray[6] === 'circle' && tokenArray[7] === 'circle' && tokenArray[8] === 'circle')
    {
      document.getElementById('7').style.backgroundColor = 'green';
      document.getElementById('8').style.backgroundColor = 'green';
      document.getElementById('9').style.backgroundColor = 'green';
      alert('GAME OVER')
    }
    if (tokenArray[0] === 'circle' && tokenArray[3] === 'circle' && tokenArray[6] === 'circle')
    {
      document.getElementById('1').style.backgroundColor = 'green';
      document.getElementById('4').style.backgroundColor = 'green';
      document.getElementById('7').style.backgroundColor = 'green';
      alert('GAME OVER')
    }
    if (tokenArray[1] === 'circle' && tokenArray[4] === 'circle' && tokenArray[7] === 'circle')
    {
      document.getElementById('2').style.backgroundColor = 'green';
      document.getElementById('5').style.backgroundColor = 'green';
      document.getElementById('8').style.backgroundColor = 'green';
      alert('GAME OVER')
    }
    if (tokenArray[2] === 'circle' && tokenArray[5] === 'circle' && tokenArray[8] === 'circle')
    {
      document.getElementById('3').style.backgroundColor = 'green';
      document.getElementById('6').style.backgroundColor = 'green';
      document.getElementById('9').style.backgroundColor = 'green';
      alert('GAME OVER')
    }
    if (tokenArray[0] === 'circle' && tokenArray[4] === 'circle' && tokenArray[8] === 'circle')
    {
      document.getElementById('1').style.backgroundColor = 'green';
      document.getElementById('5').style.backgroundColor = 'green';
      document.getElementById('9').style.backgroundColor = 'green';
      alert('GAME OVER')
    }
    if (tokenArray[2] === 'circle' && tokenArray[4] === 'circle' && tokenArray[6] === 'circle')
    {
      document.getElementById('3').style.backgroundColor = 'green';
      document.getElementById('5').style.backgroundColor = 'green';
      document.getElementById('7').style.backgroundColor = 'green';
      alert('GAME OVER')
    }

    if (tokenArray[0] === 'cross' && tokenArray[1] === 'cross' && tokenArray[2] === 'cross')
      {
        document.getElementById('1').style.backgroundColor = 'red';
        document.getElementById('2').style.backgroundColor = 'red';
        document.getElementById('3').style.backgroundColor = 'red';
        alert('GAME OVER')
      }
    if (tokenArray[3] === 'cross' && tokenArray[4] === 'cross' && tokenArray[5] === 'cross')
    {
      document.getElementById('4').style.backgroundColor = 'red';
      document.getElementById('5').style.backgroundColor = 'red';
      document.getElementById('6').style.backgroundColor = 'red';
      alert('GAME OVER')
    }
    if (tokenArray[6] === 'cross' && tokenArray[7] === 'cross' && tokenArray[8] === 'cross')
    {
      document.getElementById('7').style.backgroundColor = 'red';
      document.getElementById('8').style.backgroundColor = 'red';
      document.getElementById('9').style.backgroundColor = 'red';
      alert('GAME OVER')
    }
    if (tokenArray[0] === 'cross' && tokenArray[3] === 'cross' && tokenArray[6] === 'cross')
    {
      document.getElementById('1').style.backgroundColor = 'red';
      document.getElementById('4').style.backgroundColor = 'red';
      document.getElementById('7').style.backgroundColor = 'red';
      alert('GAME OVER')
    }
    if (tokenArray[1] === 'cross' && tokenArray[4] === 'cross' && tokenArray[7] === 'cross')
    {
      document.getElementById('2').style.backgroundColor = 'red';
      document.getElementById('5').style.backgroundColor = 'red';
      document.getElementById('8').style.backgroundColor = 'red';
      alert('GAME OVER')
    }
    if (tokenArray[2] === 'cross' && tokenArray[5] === 'cross' && tokenArray[8] === 'cross')
    {
      document.getElementById('3').style.backgroundColor = 'red';
      document.getElementById('6').style.backgroundColor = 'red';
      document.getElementById('9').style.backgroundColor = 'red';
      alert('GAME OVER')
    }
    if (tokenArray[0] === 'cross' && tokenArray[4] === 'cross' && tokenArray[8] === 'cross')
    {
      document.getElementById('1').style.backgroundColor = 'red';
      document.getElementById('5').style.backgroundColor = 'red';
      document.getElementById('9').style.backgroundColor = 'red';
      alert('GAME OVER')
    }
    if (tokenArray[2] === 'cross' && tokenArray[4] === 'cross' && tokenArray[6] === 'cross')
    {
      document.getElementById('3').style.backgroundColor = 'red';
      document.getElementById('5').style.backgroundColor = 'red';
      document.getElementById('7').style.backgroundColor = 'red';
      alert('GAME OVER')
    }
  }

  reset = () => {
    for(let i = 1; i <= 9; i++) {
      document.getElementById(i).innerHTML = null;
      document.getElementById(i).name = null;
      document.getElementById(i).title = 'empty';
      document.getElementById(i).style.backgroundColor = 'white'
      console.log(document.getElementById(i).title);
      turn = 'A';
    }
  }

  render() {
    return (
      <div className='container flex flex-col justify-around mx-auto text-center'>
        <h1 className='text-blue my-5'>Tic Tac Toe</h1>

        <div className='board flex flex-wrap justify-center mx-auto'>
          <div title='empty' onClick={(event) => {this.handleClick(event); this.statusCheck();}} className='border border-black border-8 w-24 h-24' id='1'></div>
          <div title='empty' onClick={(event) => {this.handleClick(event); this.statusCheck();}} className='border border-black border-8 w-24 h-24' id='2'></div>
          <div title='empty' onClick={(event) => {this.handleClick(event); this.statusCheck();}} className='border border-black border-8 w-24 h-24' id='3'></div>
          <div title='empty' onClick={(event) => {this.handleClick(event); this.statusCheck();}} className='border border-black border-8 w-24 h-24' id='4'></div>
          <div title='empty' onClick={(event) => {this.handleClick(event); this.statusCheck();}} className='border border-black border-8 w-24 h-24' id='5'></div>
          <div title='empty' onClick={(event) => {this.handleClick(event); this.statusCheck();}} className='border border-black border-8 w-24 h-24' id='6'></div>
          <div title='empty' onClick={(event) => {this.handleClick(event); this.statusCheck();}} className='border border-black border-8 w-24 h-24' id='7'></div>
          <div title='empty' onClick={(event) => {this.handleClick(event); this.statusCheck();}} className='border border-black border-8 w-24 h-24' id='8'></div>
          <div title='empty' onClick={(event) => {this.handleClick(event); this.statusCheck();}} className='border border-black border-8 w-24 h-24' id='9'></div>
        </div>

        <button className='mx-auto font-bold py-2 px-4 rounded bg-blue text-white hover:bg-blue-dark' onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;

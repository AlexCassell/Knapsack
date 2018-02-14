import React, { Component } from 'react';
// import QuickMaths from './components/QuickMaths';
import './App.css';

let data = [];

class App extends Component {

  componentWillMount(){

  }

  handleInput(e){
    // console.log(e.target.value);
    let string = String(e.target.value);
    console.log(string[0]);
    console.log(string[2]);
    console.log(string[0] + string[2]);
    let x = 1;
    for(let i = 0;i < string.length; i++){
      if(x < 10){
        if(string[i] === String(x)){
          data.push(x);
          data.push(string[i + 2] + string[i + 3]);
          data.push(string[i + 5] + string[i + 6]);
          x++
        }
      }
      else if(x >= 10 && x < 100){
        if(string[i] + string[i + 1] === String(x)){
          console.log("yea");
          console.log(x);
          x++
        }
      }

    }
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Knapsack</h1>
        </header>
        <form>
          <label>
            Data:
            <textarea type="text" name="data" onChange={ (e) => this.handleInput(e) }/>
          </label>
        </form>
        1 42 81
        2 42 42
        3 68 56
        4 68 25
        5 77 14
        6 57 63
        7 17 75
        8 19 41
        9 94 19
        10 34 12
      </div>
    );
  }
}

export default App;

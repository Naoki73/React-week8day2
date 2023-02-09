import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav'
import Login from './Login';
import To_do from './To_do';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      test: 0
    }
  }

  render() {
    return (
      <div>
        <Nav/>
        
        
        <Home />

        <Login />

        <To_do />

      </div>
    )
  }
}
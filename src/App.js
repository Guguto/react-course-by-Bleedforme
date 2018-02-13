import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from "./CommentBox";

class App extends Component {
  render() {
    return (
      <div className="App">
      <CommentBox> </CommentBox>
      </div>

    );
  }
}

export default App;

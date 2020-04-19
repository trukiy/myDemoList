import React, { Component } from 'react';
import './App.css';
import '../node_modules/antd/dist/antd.css';
import ShowList from './showList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowList />
      </div>
    );
  }
}

export default App;

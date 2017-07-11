import React, { Component } from 'react'; 

import Title from './Title';
import BlogItemList from './BlogItemList';
import MenuBar from './MenuBar';

import '../styles/index.css';
class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Title /> 
        <BlogItemList />
      </div>
    )
  }
}

export default App; 
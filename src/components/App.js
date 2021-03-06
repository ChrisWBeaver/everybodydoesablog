import React, { Component } from 'react'; 

import Title from './Title';
import Posts from './Posts';
import MenuBar from './MenuBar';
import Blogs from './Blogs';

import '../styles/index.css';
class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Title /> 
        <Blogs />
      </div>
    )
  }
}

export default App; 
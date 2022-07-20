
import React, { Component } from 'react';
import axios from 'axios';


import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';


export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      cats: [],
      cake: [],
      lakes: [],
      trees: []
    };
  } 
  componentDidMount() { //needs to be hard coded
  
  }
 
  
  performSearch = (query) => {
    axios.get(weblink)
      .then(response => {
        this.setState({
          photo: response.data.data //photo
        });
      })
      .catch(error => {
        console.log('weblink', error);
      });    
  }
  
  render() { 
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
            <h1 className="main-title">Evelyns Photo Search</h1>
            <SearchForm onSearch={this.performSearch} />      
        </div>    
        <div className="main-content">
          <PhotoList data={this.state.photos} />
        </div>
      </BrowserRouter>
    );
  }
}

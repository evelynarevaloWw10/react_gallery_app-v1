
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter,Route,Switch } from 'react-router-dom'



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
    axios.get(`http://api.giphy.com/v1/gifs/search?${query}&limit=24&api_key=dc6zaTOxFJmzC`)
    .then(response => {
      if(query ='cats'){
        this.setState({cats: response.data});
      } else if (query = 'cake'){
        this.setState({cake: response.data});
      }else if (query = 'lakes'){
         this.setState({cake: response.data});
      } else {
        this.setState({photos:response.data.data})
        }
      this.setState({
        photo: response.data.data
      })
   })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  
    render(){ 
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
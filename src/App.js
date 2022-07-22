
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter,Route,Switch } from 'react-router-dom'


import apiKey from "./config"
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import PhotoList from "./components/PhotoList";
import SearchForm from "./components/SearchForm";




export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      cake: [],
      lakes: [],
      
    };
  } 
      // hard coded to include default images
  componentDidMount() { 
    this.performSearch(); 
    this.performSearch('cats'); 
    this.performSearch('cake'); 
    this.performSearch('lakes '); 
}


  performSearch = (query= "cats") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => { 
    
     
      if(query ==='cats'){
        this.setState({cats: response.data.photos.photo});
      } else if (query === 'cake'){
        this.setState({cake: response.data.photos.photo});
      }else if (query === 'lakes'){
         this.setState({lakes: response.data.photos.photo});
      } else {
        this.setState({photos:response.data.photos.photo});
        }
   })
   
   .catch(error => {
      console.log('Error fetching and parsing data', error);
        })

        
    };

    render(){ 
      console.log(this.state.photos);
      return (
  
        <BrowserRouter>
        <div className="container">
            <h1 className="main-title">Evelyn's Photo Search</h1>
            <SearchForm onSearch={this.performSearch} />      
        </div>    
        <div className="main-content">
          <PhotoList data={this.state.photos} />
        </div>
      </BrowserRouter>
        );
       }
    }
    
  
  
    
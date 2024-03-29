
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import apiKey from "./config"

//importing statefull and stateless components 

import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import PhotoList from "./components/PhotoList";
import SearchForm from "./components/SearchForm";



// App class with default array values/photos 
 class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      cats: [],
      cake: [],
      dogs: [],
      
    };
  } 

      // hard coded to include default images
  componentDidMount() { 
    this.performSearch(); 
    this.performSearch('cats'); 
    this.performSearch('cake'); 
    this.performSearch('dogs'); 
}

   // axios api get method and if else setting default for selected buttons or search query
  performSearch = (query= "cats") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => { 
    
     
      if(query ==='cats'){
        this.setState({cats: response.data.photos.photo});
      } else if (query === 'cake'){
        this.setState({cake: response.data.photos.photo});
      }else if (query === 'dogs'){
         this.setState({dogs: response.data.photos.photo});
      } else {
        this.setState({photos:response.data.photos.photo});
        }
   })
   
   .catch(error => {
      console.log('Error fetching and parsing data', error);
        })

      };
    // routes attached to paths to render image selected 
        render(){ 
      console.log(this.state.photos);
      return (
  
        <BrowserRouter>
        <div className="container">
            <h1 className="main-title">Evelyn's Photo Search</h1>
            <SearchForm onSearch={this.performSearch} />      
            <Nav/>
            
            <Switch>           
              <Route  exact path='/' render={(props) => <PhotoList data={this.state.photos}/>} />
              <Route  exact path='/cats' render={() => <PhotoList data={this.state.cats} />} /> 
              <Route  exact path='/cake' render={() => <PhotoList data={this.state.cake} />} /> 
              <Route  exact path='/dogs' render={() => <PhotoList data={this.state.dogs} />} />  
              <Route  path='/:query' render={() => <PhotoList data={this.state.photos} query={this.state.query}/>} /> 
              <Route  exact path='/*' render={() => <NotFound />} />  

            </Switch>
          
          
            </div> 
          </BrowserRouter>
        );
      }
      }

    
  //  }
    
    export default App;
  
  
    
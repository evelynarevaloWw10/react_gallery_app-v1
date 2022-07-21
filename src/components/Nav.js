 

 import React, { Component } from 'react';
 import {NavLink} from 'react-router-dom' 

 
//intalizing state

 class Nav extends Component { 
 
    constructor(){
      super()
      this.state = {
        // not sure what to put in here :( 
      };
  }

  incrementScore(){
    this.setState({
      
    });
  }



    render(){
     return (
      <nav class="main-nav">
        <ul>
          <li><NavLink to="/cats">Cats</NavLink></li>
          <li><NavLink to="/cake">Cake</NavLink></li>
          <li><NavLink to="/lakes">Lakes</NavLink></li>
        </ul>
      </nav>
     
      )
   };
  }

 
 // class, handle and render
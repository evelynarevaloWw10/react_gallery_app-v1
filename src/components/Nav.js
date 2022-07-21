 

 import React, { Component } from 'react';
 import { NavLink } from 'react-router-dom'; 

 //intalizing state

 class Nav extends Component { 
 
    constructor(){
      super()
      this.state ={
        onClick:''
      }
     // event handler
      };
  }

 render(){
    return (
     <nav className="main-nav">
       <ul>
         <li><NavLink to="/cats">Cats</NavLink></li>
         <li><NavLink to="/cake">Cake</NavLink></li>
         <li><NavLink to="/lakes">Lakes</NavLink></li>
       </ul>
     </nav>
    
     )
  };
 

  

 
 // class, handle and render
 export default Nav;
 

 import React, { Component } from 'react';
 import { NavLink, withRouter } from 'react-router-dom'; 

 //intalizing state

 class Nav extends Component { 
 
    constructor(){
      super()
      this.state ={
        onClick:''
      }
 
      };

      render(){
        return (
         <nav className="main-nav">
           <ul>
           <li><NavLink to="/cats" onClick={this.props.chosen} id='cats'>Cats</NavLink></li>
           <li><NavLink to="/cake" onClick={this.props.chosen} id='cake'>Cake</NavLink></li>
           <li><NavLink to="/dogs" onClick={this.props.chosen} id='dogs'>Dogs</NavLink></li>
           </ul>
         </nav>
        
         )
      }; 

  };



 
 // class, handle and render
 export default withRouter(Nav);
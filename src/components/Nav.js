 

 import React, { Component } from 'react';
 import { NavLink} from 'react-router-dom'; 

 //intalizing state

 class Nav extends Component { 
 

      render(){
        return (
         <nav className="main-nav">
           <ul>
           <li><NavLink to="/cats">Cats</NavLink></li>
           <li><NavLink to="/cake">Cake</NavLink></li>
           <li><NavLink to="/dogs">Dogs</NavLink></li>
           </ul>
         </nav>
        
         )
      }; 

  };



 
 
 export default Nav;
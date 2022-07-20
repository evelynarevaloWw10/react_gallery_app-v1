 
 // event handlers and render not correct format need to links
 import React, { Component } from 'react';
 import {NavLink} from 'react-router-dom' 


 class Nav extends Component { 
    Nav = () => {
     return (
      <nav class="main-nav">
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>
     
      )
 };

}
 
 // class, handle and render
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Match, Link } from 'react-router'
import  Home from './Home'
import  App from './App'

//Using a BrowserRouter and Match 
//Having a Link to access the path

 export default( <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
      <Match exactly pattern="/" component={Home} />
    </div>
   </BrowserRouter>)


import './App.css';
import React ,{Component} from 'react';
import Navigation from "./component/navigation.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './component/blogs'
import Home from './component/Home';

//this is stateful component
class App extends Component 
{
  state = 
  {
    navitems : [ 
        {navlinks :"/" , NavLinksLabel : "home"},
        {navlinks :"blogs" , NavLinksLabel : "blogs"},
    ],
    LogoUrl : '/',
    LogoName : 'Routcher'
  }

  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
      <Navigation items={this.state.navitems} LogoName={this.state.LogoName} LogoUrl={this.state.LogoUrl}/>
      <Routes>
      <Route path="/" element={<Home/>}/>   
      <Route path="/Blogs" element={<Blogs/>}/>   
      </Routes>
      </div>     
      </BrowserRouter>
    );
  }
}
export default App;

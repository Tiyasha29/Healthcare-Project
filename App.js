import './App.css';
import './MyComponents/Header.js';
import Header from './MyComponents/Header';
import About from './MyComponents/About';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './MyComponents/Footer';
import Slideshow from './MyComponents/Slideshow';
import React, { useState,useEffect } from 'react';
import DisplayPrediction from './MyComponents/DisplayPrediction';

function App() {
  
  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position.coords)
    })
  },[])

  return (
  <>
  <Header/>
  <Router>
    <Routes>
    <Route exact path="/" element={<><Slideshow/><DisplayPrediction/></>}></Route>
      <Route exact path="/about" element={<About/>}></Route>           
    </Routes>
  </Router>
  
  <Footer/>
  </>
  );
}

export default App;

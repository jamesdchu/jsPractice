// import logo from './logo.svg';
import React from "react";//, { useState, useEffect } from "react";
import './App.css';
import {Routes, Router} from "react-router-dom";
import { Home, About, events, Contact } from "./pages";

// https://api.github.com/users/eveporcello

function App() {

    return(<div> 
      <div> 
        <Routes> 
          <Route path ="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/contact" element={<Conact />}/>
        </Routes>
      </div>
    </div>)
  }
  return <div>No User Available :(</div>


}

export default App;

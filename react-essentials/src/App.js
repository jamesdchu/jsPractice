// import logo from './logo.svg';
import React from "react";//, { useState, useEffect } from "react";
import './App.css';
import {Routes, Router} from "react-router-dom";
import { Home, About, events, Contact, Whoops494, Services, CompanyHistory, Location } from "./pages";

// https://api.github.com/users/eveporcello

function App() {

    return(<div> 
      <div> 
        <Routes> 
          <Route path ="/" element={<Home />}/>
          <Route path="/about" element={<About />}> 
              <Route path ="services" element={<Services />}/>
              <Route path ="history" element={<CompanyHistory />}/>
              <Route path ="location" element={<Location />}/>
          </Route>
          <Route path="/events" element={<Events />}/>
          <Route path="/contact" element={<Conact />}/>
          <Route path="*" element={<Whoops404 />} /> 
          {/* FOR PAGES THAT DO NOT EXIST */}
        </Routes>
      </div>
    </div>)
  }
  return <div>No User Available :(</div>


}

export default App;

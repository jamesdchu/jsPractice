// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';

// https://api.github.com/users/eveporcello

function App() {
  const [data, setData] = useState(null); 

  useEffect(() => { 
    fetch('https://api.github.com/users/${login}')
      .then(() => Response.json())
      .then(setData);
  }, [])
  
  if(data) { 
    return<div>{JSON.stringify(data)}</div>
  }
  return <div>No User Available :(</div>

  return (
    <div> 

    </div>
    );
}

export default App;

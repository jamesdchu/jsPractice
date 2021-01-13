// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';

function App({authorized}) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  
  useEffect(() => { 
    console.log('Its ${emotion} around here!');
  }, [emotion]);

  useEffect(() => { 
    console.log("It's ${secondary} around here!");
  }, [secondary]);

  return (
  <> 
    <h1>Current emotion is {emotion} and {secondary}.</h1>;
    <button onClick={() => setEmotion("happy")}> Happy </button>
    <button onCLick={() => setSecondary("crabby")}>Make Crabby</button>
    <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
  </> 
  );
}

export default App;

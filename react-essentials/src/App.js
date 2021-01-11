import logo from './logo.svg';
import './App.css';

function SecretComponent() { 
  return <h1> SECRET STUFF</h1>;
}

function RegularComponent() { 
  return <h1>Regular stuffs </h1>;
}

function App(props) {
  return <> 
    props.authorized ? <SecretComponent /> : <RegularComponent />;
  </> 

}

export default App;

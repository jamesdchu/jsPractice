import logo from './logo.svg';
import './App.css';

function Header(props) { 
  console.log(props);
  return (
    <header>
      <h1>{props.name}s' Kitchen</h1> 
    </header>
  )
}

function Main(props) { 
  return ( 
    <section> 
      <p>We serve the best {props.adjective} food around!</p>
    </section>
  )
}

function Footer(props) { 
  return ( 
    <footer> 
      <p>It's true as of {props.year}</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="James"/>
      <Main adjective="amazing"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

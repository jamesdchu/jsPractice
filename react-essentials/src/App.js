import logo from './logo.svg';
import './App.css';

function Header() { 
  return (
    <header>
      <h1>James' Kitchen</h1> 
    </header>
  )
}

function Main() { 
  return ( 
    <section> 
      <p>We serve the best top tier food around!</p>
    </section>
  )
}

function Footer() { 
  return ( 
    <footer> 
      <p>Zero cap</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

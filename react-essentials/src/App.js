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
      <ul style={{textAlign: "left"}}> 
        {props.dishes.map((dish) => <li>{dish}</li>)}
      </ul>
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

const dishes = [
  "Ramen", 
  "Tofu Soup",
  "Lobster"
];
dishes.map((dish) => console.log(dish));


function App() {
  return (
    <div className="App">
      <Header name="James"/>
      <Main adjective="amazing" dishes={dishes}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import restaurant from "./restaurant.jpg";

function Header(props) { 
  // console.log(props);
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
      <img src={restaurant} height = {200} alt="Napkin + silverware"/>
      <ul style={{textAlign: "left"}}> 
        {props.dishes.map((dish) => 
          <li key={dish.id}>{dish.title}</li>)}
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
  "Lobster",
  "Goop"
];
// dishes.map((dish) => console.log(dish));
const dishObjects = dishes.map((dish, i) => ({id: i, title:dish}))

function App() {
  return (
    <div className="App">
      <Header name="James"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

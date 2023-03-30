import './App.css';
import Route from
import Nav from "./compoents/navbar/Nav"
import Home from "./compoents/navbar/Home"
import About from "./compoents/navbar/About"
import RecipeList from "./compoents/navbar/listRecipe"
import newItem from "./compoents/navbar/newRecipe"
import Profile from "./compoents/navbar/Profile";
import SignUp from './compoents/form/Sigin-up';
import Reset from './compoents/form/Reset';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/recipe-list" component={RecipeList} />
        <Route path="/new-item" component={NewItem} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

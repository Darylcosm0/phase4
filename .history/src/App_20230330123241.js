import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./components/navbar/Home";
import About from "./components/navbar/About";
import RecipeList from "./components/navbar/listRecipe";
import NewItem from "./components/navbar/newRecipe";
import Profile from "./components/navbar/Profile";

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
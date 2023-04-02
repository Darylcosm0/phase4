import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Recipes from "./listRecipe";
import NewRecipe from "./NewRecipe";
import Profile from "./Profile";
import RecipeDetails from "../RecipeDetailes";
import Update from "../UpdateAccount";
import Personal from "./PersonalList"
import Login from "../form/Login"
import Register from "../form/Register"

function Navigation() {
    return (  
        <section>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/recipes" exact>
                        <Recipes />
                    </Route>
                    <Route path="/mylist" exact>
                        <Personal />
                    </Route>
                    <Route path="/new" exact>
                        <NewRecipe />
                    </Route>
                    <Route path="/profile" exact>
                        <Profile />
                    </Route>
                    <Route path="/recipes/:id">
                        <RecipeDetails />
                    </Route>
                    <Route path="/update/user">
                        <Update />
                    </Route>
                </Switch>
            </Router>
        </section>
    );
}

export default Navigation;
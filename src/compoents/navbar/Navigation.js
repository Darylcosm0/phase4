import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./Private";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Recipes from "./listRecipe";
import NewRecipe from "./NewRecipe";
import Profile from "./Profile";
import Update from "../UpdateAccount";
import Personal from "./PersonalList"
import Login from "../form/Login"
import Register from "../form/Register"
import SingleRecipeAll from "../components/SingleRecipeAll";
import SingleRecipeCrud from "../components/SingleRecipeCrud";

function Navigation() {    

    const [authenticated, setAuthenticated] = useState(false);

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
                    <PrivateRoute
                        path="/recipes"
                        exact
                        component={Recipes}
                        authenticated={authenticated}
                    />
                    <PrivateRoute
                        path="/mylist"
                        exact
                        component={Personal}
                        authenticated={authenticated}
                    />
                    <PrivateRoute
                        path="/new"
                        exact
                        component={NewRecipe}
                        authenticated={authenticated}
                    />
                    <PrivateRoute
                        path="/profile"
                        exact
                        component={Profile}
                        authenticated={authenticated}
                    />
                    <PrivateRoute
                        path="/recipes/:id"
                        component={SingleRecipeAll}
                        authenticated={authenticated}
                    />
                    <PrivateRoute
                        path="/user/:id"
                        component={SingleRecipeCrud}
                        authenticated={authenticated}
                    />
                    <Route path="/update/user">
                        <Update />
                    </Route>
                </Switch>
            </Router>
        </section>
    );
}

export default Navigation;
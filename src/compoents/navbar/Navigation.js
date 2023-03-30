import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Recipes from "./listRecipe";
import New from "./newRecipe";
import Profile from "./Profile";

function Navigation() {
    return (  
        <section>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" componet={Home} exact>
                        <Home />
                    </Route>
                    <Route path="/about" component={About} exact>
                        <About />
                    </Route>
                    <Route path="/list" component={Recipes} exact>
                        <Recipes />
                    </Route>
                    <Route path="/new" component={New} exact>
                        <New />
                    </Route>
                    <Route path="/profile" component={Profile} exact>
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </section>
    );
}

export default Navigation;
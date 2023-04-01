import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Recipes from "./ListRecipe";
import New from "./NewRecipe";
import Profile from "./Profile";

function Navigation() {
    return (  
        <section>
            <Router>
               
                <Nav />
                <Switch>
            
                    <Route path="/" element={<Home />} exact>
                    </Route>
                    <Route path="/about" element={<About />} exact>
                      
                    </Route>
                    <Route path="/list" element={<Recipes />} exact>
                        
                    </Route>
                    <Route path="/new" element={<New />}exact></Route>
                    <Route path="/profile" element={<Profile />} exact>
                        
                    </Route>
                   
                </Switch>
              
            </Router>
        </section>
    );
}

export default Navigation;
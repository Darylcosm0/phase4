import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ListRecipe from './ListRecipe';
import axios from 'axios';
import Search from '../Search';
import Sort from '../form/Sort';
import TotalCalories from './TotalCalories';


function UserRecipes(props) {
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
    axios.get()
    })
    return (
     <>
     <Search/>
     <Sort/>
     <h1>Your Recipes</h1>
     <ListRecipe recipes={recipes}/>
     
     </>
    );
}

export default UserRecipes;
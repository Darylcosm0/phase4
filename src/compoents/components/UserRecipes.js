import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import listRecipe from '../navbar/ListRecipe';
import axios from 'axios';
import Search from '../Search';
import Sort from '../form/Sort';


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
     <listRecipe recipes={recipes}/>
     
     </>
    );
}

export default UserRecipes;
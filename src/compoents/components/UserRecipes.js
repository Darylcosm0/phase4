import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import listRecipe from '../navbar/ListRecipe';
import axios from 'axios';


function UserRecipes(props) {
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
    axios.get()
    })
    return (
     <>
     <h1>Your Rceipes</h1>
     <listRecipe recipes={recipes}/>
     
     </>
    );
}

export default UserRecipes;
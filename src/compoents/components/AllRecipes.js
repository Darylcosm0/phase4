import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import listRecipe from '../navbar/listRecipe';


function AllRecipes(props) {
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
    axios.get()
    })
    return (
     <>
     <h1>All recipes</h1>
     <listRecipe recipes={recipes}/>
     
     </>
    );
}

export default AllRecipes;
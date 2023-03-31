import React from 'react';
import { useStore } from 'zustand';
import { recipesStore } from '../../data/RecipesStore';
import axios from 'axios';

function DeleteRecipe({recipe}) {
    const store = useStore(recipesStore)
    return (
       <button onClick={()=>{
        axios.delete(`https://phase-4-project-recipes-backend.onrender.com/recipes/${recipe.id}`).then(
        axios.get("https://phase-4-project-recipes-backend.onrender.com/recipes").then(
            r => store.changeRecipes(r.data)
        )
        )
       }}></button>
    );
}

export default DeleteRecipe;
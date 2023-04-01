import React from 'react';
import axios from "axios"
import {useStore} from "zustand"
import { recipesStore } from '../../data/RecipesStore';

function RemoveIngredient({id}) {
    console.log(id)
    const store = useStore(recipesStore)
    return (
     <button onClick={(()=>{
        axios.delete(`https://phase-4-project-recipes-backend.onrender.com/ingredients/${id}`).then(
            axios.get("https://phase-4-project-recipes-backend.onrender.com/recipes")).then(
                r => store.changeRecipes(r.data))
     })}>Remove Ingredient</button>
    );
}

export default RemoveIngredient;
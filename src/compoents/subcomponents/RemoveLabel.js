import React from 'react';
import axios from 'axios';
import { useStore } from 'zustand';
import { singleRecipeStore } from '../../data/RecipesStore';

function RemoveLabel({recipe_id,label_id}) {
    console.log(recipe_id)
    console.log(label_id)
    const singleStore = useStore(singleRecipeStore)
    return (
       <button onClick={()=>{
        axios.delete(`https://phase-4-project-recipes-backend.onrender.com/recipe_labels`,{
        recipe_id:recipe_id,
        label_id:label_id
        }).then(
            axios.get(`https://phase-4-project-recipes-backend.onrender.com/recipes/${recipe_id}`).then(
              r => singleStore.changeSingleRecipe(r.data)
          ))
       }}>X</button>
    );
}

export default RemoveLabel;
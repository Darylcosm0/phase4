import React from 'react';
import axios from "axios"
import {useStore} from "zustand"
import { singleRecipeStore } from '../../data/RecipesStore';

function RemoveReview({recipe_id,review_id}) {
    const singleStore = useStore(singleRecipeStore)
    return (
        <button
        onClick={()=>{
            axios.delete(`https://phase-4-project-recipes-backend.onrender.com/reviews/${review_id}`).then(
                axios.get(`https://phase-4-project-recipes-backend.onrender.com/recipes/${recipe_id}`).then(
                  r => singleStore.changeSingleRecipe(r.data)
              ))
    }}
        >Remove review</button>
    );
}

export default RemoveReview;
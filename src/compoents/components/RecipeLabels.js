import React from 'react';
import { userStore } from '../../data/RecipesStore';
import {useStore} from "zustand"

function RecipeLabels({recipe}) {
      if(recipe.labels !== undefined)
      return (
      recipe.labels.map((label)=>{
       return <div>
            <div style={{color:`${label.color}`}}>{label.name}</div>
            <button>X</button>
              </div>
      })
    );
}

export default RecipeLabels;
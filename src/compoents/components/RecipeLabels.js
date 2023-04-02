import React from 'react';
import { userStore } from '../../data/RecipesStore';
import {useStore} from "zustand"
import RemoveLabel from '../subcomponents/RemoveLabel';

function RecipeLabels({recipe}) {
  const user = useStore(userStore)
      if(recipe.labels !== undefined)
      return (
      recipe.labels.map((label)=>{
      if(user.user.id == recipe.id){
        return <div>
        <div style={{color:`${label.color}`}}>{label.name}</div>
        <RemoveLabel label_id={label.id} recipe_id={recipe.id}/>
          </div>
      }else{
        return <div>
        <div style={{color:`${label.color}`}}>{label.name}</div>
          </div>
      }
      
      })
    );
}

export default RecipeLabels;
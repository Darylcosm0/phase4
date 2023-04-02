import React, { useEffect } from 'react';
import RemoveIngredient from '../subcomponents/RemoveIngredient';
import { useState } from 'react';
import { userStore } from '../../data/RecipesStore';
import {useStore } from "zustand"

function RecipeIngredients({recipe}) {
  const [currentIngredients,setCurrentIngredients] = useState(undefined)
  const currentUser = useStore(userStore)
  useEffect(()=>{
    setCurrentIngredients(recipe.ingredients)
  },[recipe,currentUser])
  
  if(currentIngredients == undefined){
    return "loading..."
  }
  else{
      if(recipe.id == currentUser.user.id){
      return(  currentIngredients.map((ingredient)=>{
        console.log(ingredient.calories * ingredient.quantity)
        return <div key={ingredient.id}>
        <div>{ingredient.name}</div>
        <p>Calories:{ingredient.calories * ingredient.quantity}</p>
        
        <RemoveIngredient id={ingredient.id}/>
        </div>
        
      })
      )
    }
    else{
      return(  currentIngredients.map((ingredient)=>{
        return <div key={ingredient.id}>
        <div>{ingredient.name}</div>
        <p>Calories:{ingredient.calories * ingredient.quantity}</p>
        </div>
      })
      )
      

    }

  }
    
}

export default RecipeIngredients;
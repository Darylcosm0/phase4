import React, { useEffect } from 'react';
import RemoveIngredient from '../subcomponents/RemoveIngredient';
import { useState } from 'react';

function RecipeIngredients({ingredients}) {

  const [currentIngredients,setCurrentIngredients] = useState(undefined)
  useEffect(()=>{
    setCurrentIngredients(ingredients)
  },[ingredients])
  console.log(currentIngredients)
  if(currentIngredients == undefined){
    return "loading..."
  }
  else{
    console.log(ingredients)
    return (
        ingredients.map((ingredient)=>{
        return <>
        <div>{ingredient.name}</div>
        <RemoveIngredient/>
        </>
        
      })
    );

  }
    
}

export default RecipeIngredients;
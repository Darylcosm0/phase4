import React, { useEffect } from 'react';
import RemoveIngredient from '../subcomponents/RemoveIngredient';
import { useState } from 'react';

function RecipeIngredients({ingredients}) {

  const [currentIngredients,setCurrentIngredients] = useState(undefined)
  useEffect(()=>{
    setCurrentIngredients(ingredients)
  },[ingredients])
  if(currentIngredients == undefined){
    return "loading..."
  }
  else{
    return (
        ingredients.map((ingredient)=>{
        return <div key={ingredient.id}>
        <div>{ingredient.name}</div>
        <RemoveIngredient id={ingredient.id}/>
        </div>
        
      })
    );

  }
    
}

export default RecipeIngredients;
import React from 'react';
import RemoveIngredient from '../subcomponents/RemoveIngredient';

function RecipeIngredients({ingredients}) {
    return (
      // ingredients.map((ingredient)=>{
      //   <div style={{color:`${ingredient.color}`}}>{ingredient.name}</div>
      // })
      <>
      "Recipe Ingredients"
      <RemoveIngredient/>
      </>
    );
}

export default RecipeIngredients;
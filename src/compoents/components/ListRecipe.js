import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'zustand';
import { currentRecipeStore } from '../../data/RecipesStore';
import TotalCalories from './TotalCalories';

function ListRecipe({recipes}) {
  const thisRecipe = useStore(currentRecipeStore)
    return (   
     recipes.map((recipe)=>{
      return <div key={recipe.id} onClick={()=>{
        thisRecipe.changeCurrentRecipe(recipe.id)
      }}>
      <h4>{recipe.title}</h4>
      {/* <p>{recipe.description}</p> */}
      <TotalCalories ingredients={recipe.ingredients}/>
      
      </div>
    //this div should be  a link to that single recipe
     })
    );
}

export default ListRecipe;
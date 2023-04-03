import React from 'react';
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
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'><h4>{recipe.title}</h4></h5>
          <p className='card-text'><TotalCalories ingredients={recipe.ingredients}/></p>
          {/* <p>{recipe.description}</p> */}
        </div>
      </div>
      
      </div>
    //this div should be  a link to that single recipe
     })
    );
}

export default ListRecipe;
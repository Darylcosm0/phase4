import React from 'react';
import { Link } from 'react-router-dom';

function ListRecipe({recipes}) {
    console.log(recipes)
    return (   
     recipes.map((recipe)=>{
      return <div>{recipe.title}</div>
    //this div should be  a link to that single recipe
     })
    );
}

export default ListRecipe;
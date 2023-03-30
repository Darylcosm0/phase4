import React from 'react';
import { Link } from 'react-router-dom';

function listRecipe({recipes}) {
    return (
     recipes.map((recipe)=>{
      <Link to=""><div>{recipe.name}</div></Link>
     })
    );
}

export default listRecipe;
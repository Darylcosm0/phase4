import React from 'react';

function RecipeLabels({labels}) {
    return (
      ingredients.map((label)=>{
        <div style={{color:`${label.color}`}}>{label.name}</div>
      })
    );
}

export default RecipeLabels;
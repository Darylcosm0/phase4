import React from 'react';

function RecipeLabels({labels}) {
    return (
      labels.map((label)=>{
        <div style={{color:`${label.color}`}}>{label.name}</div>
      })
    );
}

export default RecipeLabels;
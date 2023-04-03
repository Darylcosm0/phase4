import React from 'react';

function RecipeAbout({ name, description, prepTime, cookTime, servings, ingredients, instructions }) {
  return (
    <div>
      <h2>About {name}</h2>
      <p>{description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>Prep time: {prepTime} minutes</p>
      <p>Cook time: {cookTime} minutes</p>
      <p>Servings: {servings}</p>
    </div>
  );
}

export default RecipeAbout;

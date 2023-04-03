import React from 'react';

function RecipeAbout({ name, description, prepTime, cookTime, servings }) {
  return (
    <div>
      <h2>About {name}</h2>
      <p>{description}</p>
      <ul>
        <li>Prep time: {prepTime} minutes</li>
        <li>Cook time: {cookTime} minutes</li>
        <li>Servings: {servings}</li>
      </ul>
    </div>
  );
}

export default RecipeAbout;

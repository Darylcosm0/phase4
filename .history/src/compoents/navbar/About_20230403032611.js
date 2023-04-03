import React from 'react';

function About({
  name,
  description,
  prepTime,
  cookTime,
  servings,
  ingredients,
  instructions,
  nutritionalInfo,
  variations,
  storageInstructions,
  servingSuggestions,
  origin,
}) {
  return (
    <div>
      <h2>About {name}</h2>
      <p>{description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients((ingredient, index) => (
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
      {nutritionalInfo && (
        <div>
          <h3>Nutritional Information:</h3>
          <table>
            <thead>
              <tr>
                <th>Calories</th>
                <th>Protein</th>
                <th>Carbohydrates</th>
                <th>Fat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{nutritionalInfo.calories}</td>
                <td>{nutritionalInfo.protein}g</td>
                <td>{nutritionalInfo.carbohydrates}g</td>
                <td>{nutritionalInfo.fat}g</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {variations && (
        <div>
          <h3>Variations:</h3>
          <ul>
            {variations.map((variation, index) => (
              <li key={index}>{variation}</li>
            ))}
          </ul>
        </div>
      )}
      {storageInstructions && (
        <div>
          <h3>Storage and Reheating Instructions:</h3>
          <p>{storageInstructions}</p>
        </div>
      )}
      {servingSuggestions && (
        <div>
          <h3>Serving Suggestions:</h3>
          <p>{servingSuggestions}</p>
        </div>
      )}
      {origin && (
        <div>
          <h3>Origin:</h3>
          <p>{origin}</p>
        </div>
      )}
    </div>
  );
}

export default About;

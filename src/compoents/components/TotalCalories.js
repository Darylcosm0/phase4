import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function TotalCalories({ ingredients }) {
  const [calories, setCalories] = useState([]);
  console.log(calories);
  useEffect(() => {
    if (ingredients !== undefined)
      setCalories(
        ingredients.map((ingredient) => {
          return ingredient.calories * ingredient.quantity;
        })
      );
  }, [ingredients]);
  const initialValue = 0;
  return (
    <div>
      Total Calories:
      {calories.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      )}
    </div>
  );
}

export default TotalCalories;

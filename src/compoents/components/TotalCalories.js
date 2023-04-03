import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function TotalCalories({ ingredients }) {
  const [calories, setCalories] = useState([]);
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
    <p>
      Total Calories:
      {calories.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      )}
    </p>
  );
}

export default TotalCalories;

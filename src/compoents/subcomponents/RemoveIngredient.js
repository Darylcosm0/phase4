import React from "react";
import axios from "axios";
import { useStore } from "zustand";
import { currentRecipeStore } from "../../data/RecipesStore";
import { useState } from "react";
import { useEffect } from "react";

function RemoveIngredient({ id, recipe_id }) {
  const currentRecipe = useStore(currentRecipeStore);
  const [recipeId, setRecipeId] = useState(undefined);
  useEffect(() => {
    setRecipeId(recipe_id);
  }, []);

  return (
    <button
      onClick={() => {
        axios
          .delete(
            `https://phase-4-project-recipes-backend.onrender.com/ingredients/${id}`
          )
          .then((r) => {
            if (r.status == 204) {
              axios
                .get(
                  `https://phase-4-project-recipes-backend.onrender.com/recipes/${currentRecipe.recipe.id}`
                )
                .then((r) => currentRecipe.changeCurrentRecipe(r.data));
            }
          });
      }}
    >
      Remove Ingredient
    </button>
  );
}

export default RemoveIngredient;

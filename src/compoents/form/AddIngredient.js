import { useState } from "react";
import { useEffect } from "react";
import { currentRecipeStore } from "../../data/RecipesStore";
import axios from "axios";
import { useStore } from "zustand";
import { recipesStore } from "../../data/RecipesStore";
import AddLabel from "./AddLabel";

function AddIngredient({ recipe }) {
  // :name,:recipe_id,:quantity,:measurement_unit,:calories
  const store = useStore(recipesStore);
  const singleStore = useStore(currentRecipeStore);
  const [next, setNext] = useState();
  const [isLoading, setIsLoading] = useState();
  const [ingredient, setIngredient] = useState({
    name: "",
    quantity: undefined,
    measurement_unit: "",
    calories: undefined,
    recipe_id: undefined,
  });
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [measurement, setMeasurement] = useState("");
  const [calories, setCalories] = useState(0);
  const [recipeId, setRecipeId] = useState(null);

  useEffect(() => {
    setRecipeId(recipe.id);
  }, [recipe]);

  function handleSubmit(e) {
    console.log(recipe.id)
    e.preventDefault();
    axios
      .post(
        `https://phase-4-project-recipes-backend.onrender.com/ingredients`,
        {
    name:name,
    quantity:quantity,
    measurement_unit: measurement,
    calories: calories,
    recipe_id:recipeId
          
        }
      )
      .then(
        axios
          .get("https://phase-4-project-recipes-backend.onrender.com/recipes")
          .then((r) => store.changeRecipes(r.data)),
        axios
          .get(
            `https://phase-4-project-recipes-backend.onrender.com/recipes/${recipeId}`
          )
          .then(
            (r) => singleStore.changeCurrentRecipe(r.data),
            console.log("I've run")
          )
      );
  }

  const handleNext = (e) => {
    e.preventDefault();
    setNext(true);
    setIsLoading(true);
  };
  if (next) {
    return <AddLabel recipe_id={recipe.id} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add an Ingredient</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Quantity"
        onChange={(e) => {
          setQuantity(e.target.value)
        }}
      />
      <input
        type="text"
        placeholder="Measurement eg. Kg"
        onChange={(e) => {
          setMeasurement(e.target.value)
        }}
      />
      <input
        type="text"
        placeholder="Calories"
        onChange={(e) => {
          setCalories(e.target.value)
        }}
      />
      {!isLoading && (
        <button type="submit">
          Add
        </button>
      )}
      {isLoading && (
        <button type="submit" disabled>
          Progressing...
        </button>
      )}
    </form>
  );
}

export default AddIngredient;

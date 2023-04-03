import React from "react";
import { useState } from "react";
import axios from "axios";
import { useStore } from "zustand";
import { singleRecipeStore } from "../../data/RecipesStore";
import UpdateRecipe from "./UpdateRecipe";

function AddLabel({ recipe_id }) {
  const singleStore = useStore(singleRecipeStore);
  const [label, setLabel] = useState("1");
  const [add, setAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        "https://phase-4-project-recipes-backend.onrender.com/recipe_labels",
        {
          recipe_id: recipe_id,
          label_id: parseInt(label),
        }
      )
      .then(
        axios
          .get(
            `https://phase-4-project-recipes-backend.onrender.com/recipes/${recipe_id}`
          )
          .then((r) => singleStore.changeSingleRecipe(r.data))
      );
  }

  const handleAdd = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  if (add) {
    return <UpdateRecipe recipe={singleStore.recipe} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setLabel(e.target.value)}>
        <option value="1">High Spice</option>
        <option value="2">Mild Spice</option>
        <option value="3">Moderate Spice</option>
        <option value="4">Alcoholic</option>
        <option value="5">Caffeinated</option>

        {/* Label.create(name:"Highly Spicy",color:"red")
Label.create(name:"Mildly Spicy",color:"blue")
Label.create(name:"Moderately Spicy",color:"green")
Label.create(name:"Alcoholic",color:"pink")
Label.create(name:"Caffeinated",color:"brown") */}

      </select>
      { !isLoading && <button onClick={handleAdd}>Add</button>}
      { isLoading && <button disabled>Add....</button>}
    </form>
  );
}

export default AddLabel;

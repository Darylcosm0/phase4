import { useState } from "react";
import { useEffect } from "react";
import { singleRecipeStore } from "../../data/RecipesStore";
import axios from 'axios';
import { useStore } from "zustand";
import { recipesStore } from "../../data/RecipesStore";
import AddLabel from "./AddLabel"


function AddIngredient({recipe}) {
    // :name,:recipe_id,:quantity,:measurement_unit,:calories
    const store = useStore(recipesStore)
    const singleStore = useStore(singleRecipeStore)
    const [next, setNext] = useState();
    const [isLoading, setIsLoading] = useState();
    const [ingredient,setIngredient] = useState({
    name: "",
    quantity:undefined,
    measurement_unit:"",
    calories:undefined, 
    recipe_id:undefined 
    })
    useEffect(() =>{
        setIngredient({
            ...ingredient, recipe_id:recipe["id"]
         })
    },[recipe])

    function handleSubmit(e){
     e.preventDefault()
     axios.post(`https://phase-4-project-recipes-backend.onrender.com/ingredients`,ingredient).then(
        axios.get("https://phase-4-project-recipes-backend.onrender.com/recipes").then(
            r => store.changeRecipes(r.data)
        ),
        axios.get(`https://phase-4-project-recipes-backend.onrender.com/recipes/${recipe.id}`).then(
        r => singleStore.changeSingleRecipe(r.data),
        console.log("I've run")
      )
        )
    }

    const handleNext = (e) => {
      e.preventDefault();
      setNext(true);
      setIsLoading(true);
    };
    if (next) {
      return <AddLabel recipe_id={recipe.id}/> 
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) =>{
        setIngredient({
            ...ingredient, name:e.target.value
         })
      }}/>
          <input type="text" placeholder="Quantity" onChange={(e) =>{
             setIngredient({
                ...ingredient, quantity:e.target.value
             })
        
      }}/>
          <input type="text" placeholder="Measurement eg. Kg" onChange={(e) =>{
             setIngredient({
                ...ingredient, measurement_unit:e.target.value
             })
        
    }}/>
        <input type="text" placeholder="Calories" onChange={(e) =>{
             setIngredient({
                ...ingredient, calories:e.target.value
             })
        
    }}/>
    { !isLoading && <button type="submit" onClick={handleNext}>Next</button>}
    { isLoading && <button type="submit" disabled>Progressing...</button>}
    </form>
  );
}

export default AddIngredient;
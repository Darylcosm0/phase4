import React from 'react';
import { useState } from "react";
import { useStore } from "zustand";
import { recipesStore } from "../../data/RecipesStore";
import axios from 'axios';
import { userStore } from '../../data/RecipesStore';
import { singleRecipeStore } from '../../data/RecipesStore';
import { useHistory } from "react-router-dom";

function UpdateRecipe({recipe}){

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false)

        function handleSubmit(e){
            e.preventDefault()
            setIsLoading(true)
           setRecipeData({...recipeData,user_id:currentUser.user.id})
            axios.put(`https://phase-4-project-recipes-backend.onrender.com/recipes/${recipe.id}`,recipeData)
              .then(
                axios.get("https://phase-4-project-recipes-backend.onrender.com/recipes")
                  .then(r => store.changeRecipes(r.data))
              )
              .then(
                axios.get(`https://phase-4-project-recipes-backend.onrender.com/recipes/${recipe.id}`)
                  .then(r => {
                    singleStore.changeSingleRecipe(r.data)
                    history.push(`/recipes/${recipe.id}`)
                    setIsLoading(false)
                    console.log('created new recipe successfully')
                  })
              )
        }

    const store = useStore(recipesStore)
    const singleStore = useStore(singleRecipeStore)
    const currentUser = useStore(userStore)
    const [recipeData,setRecipeData] = useState({
    title:recipe.title,
    instructions:recipe.instructions,
    description:recipe.description,
    cuisine:recipe.cuisine,
    recipe_image:recipe.image,
    user_id:null
    })

  return (
    <form onSubmit={handleSubmit}>
        <h2>Update your recipe</h2>
      <input type="text" placeholder="Title" onChange={(e)=>{
      setRecipeData({
        ...recipeData,title:e.target.value
      })
      }}></input>

       <input type="text" placeholder="Instructions" onChange={(e)=>{
    setRecipeData({
      ...recipeData,instructions:e.target.value
    })
      }}></input>

        <textarea type="text" placeholder="Description" onChange={(e)=>{
      setRecipeData({
        ...recipeData,description:e.target.value
      })
      }}></textarea>

       <input type="text" placeholder="Cuisine" onChange={(e)=>{
      setRecipeData({
        ...recipeData,cuisine:e.target.value
      })
      }}></input>
       <input type="url" placeholder="Image(optional)" onChange={(e)=>{
      setRecipeData({
        ...recipeData,recipe_image:e.target.value
      })
      }}></input>
      { !isLoading && <button type="submit">Update</button>}
      { isLoading && <button type="submit" disabled>Creating...</button>}
    </form>
  );
};

export default UpdateRecipe;

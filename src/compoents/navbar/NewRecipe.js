import axios from "axios";
import Create from "../Create";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "zustand";
import { recipesStore, userStore } from "../../data/RecipesStore";

function NewRecipe(){
        function handleSubmit(e){
            e.preventDefault()
            setRecipeData({...recipeData,user_id:loggedUserStore.user.id})
            axios.post("https://phase-4-project-recipes-backend.onrender.com/recipes",recipeData).then(
                axios.get("https://phase-4-project-recipes-backend.onrender.com/recipes").then(
                    r => store.changeRecipes(r.data)
                )
            )
                }
    const store = useStore(recipesStore)
    const loggedUserStore = useStore(userStore) 
    const [recipeData,setRecipeData] = useState({
    title:"",
    instructions:"",
    description:"",
    cuisine:"",
    recipe_image:"",
    user_id:null
    })
   
  return (
    // <section className="content">
    //     <Create />
    // </section>

    <form onSubmit={handleSubmit}>
        <h2>Create your very own recipe!</h2>
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
      <button type="submit">Create Recipe</button>
    </form>
  );
};

export default NewRecipe;

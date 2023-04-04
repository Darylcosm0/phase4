import axios from "axios";
import { useState } from "react";
import { useStore } from "zustand";
import { recipesStore, userStore } from "../../data/RecipesStore";
import { useHistory } from "react-router-dom";

function NewRecipe(){

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false)
  const store = useStore(recipesStore)
  const loggedUserStore = useStore(userStore) 
  const [title,setTitle] = useState("")
  const [instructions,setInstuctions] = useState("")
  const [description,setDescription] = useState("")
  const [cuisine,setCuisine] = useState("")
  const [recipeImage,setRecipeImage] = useState("")
  const [userId,setUserId] = useState(0)

        function handleSubmit(e){
            e.preventDefault()
            setIsLoading(true)
            // setRecipeData({...recipeData, user_id:loggedUserStore.user.id})
            axios.post("https://phase-4-project-recipes-backend.onrender.com/recipes",{
              title:title,
              instructions:instructions,
              description:description,
              cuisine:cuisine,
              recipe_image:recipeImage,
              user_id:loggedUserStore.user.id
              
            }).then(
                axios.get("https://phase-4-project-recipes-backend.onrender.com/recipes").then( r => {
                    store.changeRecipes(r.data)
                    history.push('/recipes')
                    setIsLoading(false)
                    })
            )
                }


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
      setTitle(e.target.value)
      }}></input>

       <input type="text" placeholder="Instructions" onChange={(e)=>{
    setInstuctions(e.target.value)
      }}></input>

        <textarea type="text" placeholder="Description" onChange={(e)=>{
      setDescription(e.target.value)
      }}></textarea>

       <input type="text" placeholder="Cuisine" onChange={(e)=>{
      setCuisine(e.target.value)
      }}></input>
       <input type="url" placeholder="Image(optional)" onChange={(e)=>{
      setRecipeData({
        ...recipeData,recipe_image:e.target.value
      })
      }}></input>
       { !isLoading && <button type="submit">Create Recipe</button>}
      { isLoading && <button type="submit" disabled>Creating...</button>}
    </form>
  );
};

export default NewRecipe;

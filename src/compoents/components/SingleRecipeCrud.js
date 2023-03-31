import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import RecipeWarning from './RecipeWarning';
import RecipeLabels from './RecipeLabels';
import RecipeIngredients from './RecipeIngredients';
import RecipeReviews from '../subcomponents/RecipeReviews';
import NewRecipe from '../navbar/NewRecipe';
import UpdateRecipe from '../form/UpdateRecipe';
import DeleteRecipe from '../subcomponents/DeleteRecipe';
import AddIngredient from '../form/AddIngredient';
import RemoveIngredient from '../subcomponents/RemoveIngredient';
import AddLabel from '../form/AddLabel';
import RemoveLabel from '../subcomponents/RemoveLabel';
import TotalCalories from './TotalCalories';


function SingleRecipeCrud(props) {
    const [recipe,setRecipe] = useState({})
    useEffect(() =>{
    axios.get("http://127.0.0.1:3000/recipes/1").then(
    r => setRecipe(r.data)
    )
    },[])
    return (
        <div>
            <h3>{recipe.title}</h3>
            <RecipeWarning/>
            <RecipeLabels/>
            <img src={recipe.recipe_image}/>
            <p>{recipe.description}</p>
            <RecipeIngredients/>
            <p>{recipe.instructions}</p>
            <p>{recipe.cuisine}</p>
            <TotalCalories/>
            <div>
                <RecipeReviews/>
                <div>
                    <NewRecipe/>
                    <UpdateRecipe/>
                    <DeleteRecipe/>
                </div>
                <div>
                    <AddIngredient/>
                    <RemoveIngredient/>
                </div>
                <div>
                    <AddLabel/>
                    <RemoveLabel/>
                </div>
            </div>

        </div>
    );
}

export default SingleRecipeCrud;
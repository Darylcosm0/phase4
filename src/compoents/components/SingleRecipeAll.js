import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import RecipeWarning from './RecipeWarning';
import RecipeLabels from './RecipeLabels';
import RecipeIngredients from './RecipeIngredients';
import RecipeReviews from '../subcomponents/RecipeReviews';
import AddReview from '../form/AddReview';
import RemoveReview from '../subcomponents/RemoveReview';
import TotalCalories from './TotalCalories';
import { useStore } from 'zustand';

function SingleRecipeAll(props) {
    const [recipe,setRecipe] = useState({})
    useEffect(() =>{
    axios.get("https://phase-4-project-recipes-backend.onrender.com/recipes/1").then(
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
                    <AddReview/>
                    <RemoveReview/>
                </div>
            </div>

        </div>
    );
}

export default SingleRecipeAll;
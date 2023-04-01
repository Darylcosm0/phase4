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
import {singleRecipeStore } from '../../data/RecipesStore';

function SingleRecipeAll(props) {
    const store = useStore(singleRecipeStore)
    useEffect(() =>{
    axios.get("https://phase-4-project-recipes-backend.onrender.com/recipes/1").then(
    r => store.changeSingleRecipe(r.data)
    )
    },[])
    return (
        <div>
            <h3>{store.recipe.title}</h3>
            <RecipeWarning/>
            <RecipeLabels/>
            <img src={store.recipe.recipe_image}/>
            <p>{store.recipe.description}</p>
            <RecipeIngredients recipe={store.recipe}/>
            <p>{store.recipe.instructions}</p>
            <p>{store.recipe.cuisine}</p>
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
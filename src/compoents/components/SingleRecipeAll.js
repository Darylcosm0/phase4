import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import RecipeWarning from './RecipeWarning';
import RecipeLabels from './RecipeLabels';
import RecipeIngredients from './RecipeIngredients';
import RecipeReviews from '../subcomponents/RecipeReviews';
import AddReview from '../form/AddReview';
import TotalCalories from './TotalCalories';
import { useStore } from 'zustand';
import {singleRecipeStore } from '../../data/RecipesStore';
import { currentRecipeStore } from '../../data/RecipesStore';

function SingleRecipeAll(props) {
    const store = useStore(singleRecipeStore)
    const currentRecipe = useStore(currentRecipeStore)
    useEffect(() =>{
    axios.get(`https://phase-4-project-recipes-backend.onrender.com/recipes/${currentRecipe.recipe}`).then(
    r => store.changeSingleRecipe(r.data)
    )
    },[currentRecipe])
    return (
        <div>
            <article>
                    <img src={store.recipe.recipe_image} alt='recipe display'/>
                    <RecipeLabels recipe={store.recipe}/>
                    <h3>{store.recipe.title}</h3>
                    <p>{store.recipe.cuisine}</p>
                    <RecipeWarning recipe={store.recipe}/>
                    <p>{store.recipe.description}</p>
                    <RecipeIngredients recipe={store.recipe}/>
                    <p>{store.recipe.instructions}</p>
                <TotalCalories/>
                <div>
                <RecipeReviews recipe={store.recipe}/>
                <div>
                    <AddReview recipe={store.recipe}/>
                </div>
                </div> 

                <div>
                    
                </div>
            </article>

        </div>
    );
}

export default SingleRecipeAll;
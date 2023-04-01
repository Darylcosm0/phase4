import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import RecipeWarning from './RecipeWarning';
import RecipeLabels from './RecipeLabels';
import RecipeIngredients from './RecipeIngredients';
import RecipeReviews from '../subcomponents/RecipeReviews';
import NewRecipe from '../navbar/NewRecipe';
import DeleteRecipe from '../subcomponents/DeleteRecipe';
import AddIngredient from '../form/AddIngredient';
import RemoveIngredient from '../subcomponents/RemoveIngredient';
import AddLabel from '../form/AddLabel';
import RemoveLabel from '../subcomponents/RemoveLabel';
import TotalCalories from './TotalCalories';
import UpdateRecipe from '../form/UpdateRecipe';
import { singleRecipeStore } from '../../data/RecipesStore';
import { useStore } from 'zustand';


function SingleRecipeCrud(props) {
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
            <AddIngredient recipe={store.recipe}/>
            <p>{store.recipe.instructions}</p>
            <p>{store.recipe.cuisine}</p>
            <TotalCalories/>
            <div>
                {/* <RecipeReviews/> */}
                <div>
                    <NewRecipe/>
                    <UpdateRecipe recipe={store.recipe}/>
                    <DeleteRecipe recipe={store.recipe}/>
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
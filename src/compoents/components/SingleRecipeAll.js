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

function SingleRecipeAll(props) {
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
            <img src={recipe.recipe_image}/>
            <p>{recipe.description}</p>
            <RecipeIngredients/>
            <p>{recipe.instructions}</p>
            <p>{recipe.cuisine}</p>
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
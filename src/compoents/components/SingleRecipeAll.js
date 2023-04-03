import axios from 'axios';
import React, { useState } from 'react';
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
    const [comment, setComment] = useState(false);

    useEffect(() =>{
    axios.get(`https://phase-4-project-recipes-backend.onrender.com/recipes/${currentRecipe.recipe}`).then(
    r => store.changeSingleRecipe(r.data)
    )
    },[currentRecipe])


    const handleComment = (e) => {
        e.preventDefault();
        setComment(true);
        
    }

    if (comment) {
        return <AddReview recipe={store.recipe}/>
    }

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
            </article>
                <div>
                    <div>
                    <RecipeReviews recipe={store.recipe}/>
                    
                            <div>
                                <button onClick={handleComment}>Leave a comment</button>
                            </div>
                    </div> 
                </div>
        </div>
    );
}

export default SingleRecipeAll;
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import RecipeWarning from './RecipeWarning';
import RecipeLabels from './RecipeLabels';
import RecipeIngredients from './RecipeIngredients';
import NewRecipe from '../navbar/NewRecipe';
import DeleteRecipe from '../subcomponents/DeleteRecipe';
import AddIngredient from '../form/AddIngredient';
import AddLabel from '../form/AddLabel';
import RemoveLabel from '../subcomponents/RemoveLabel';
import TotalCalories from './TotalCalories';
import UpdateRecipe from '../form/UpdateRecipe';
import { singleRecipeStore } from '../../data/RecipesStore';
import { useStore } from 'zustand';
import { currentRecipeStore } from '../../data/RecipesStore';

function SingleRecipeCrud(props) {
    const store = useStore(singleRecipeStore)
    const currentRecipe = useStore(currentRecipeStore)
    useEffect(() =>{
    axios.get(`https://phase-4-project-recipes-backend.onrender.com/recipes/${currentRecipe.recipe}`).then(
    r => store.changeSingleRecipe(r.data)
    )
    },[currentRecipe])
    return (
        <div>
            <h3>{store.recipe.title}</h3>
            <RecipeWarning recipe={store.recipe}/>
            <RecipeLabels recipe={store.recipe}/>
            <AddLabel recipe_id={store.recipe.id}/>
            <img src={store.recipe.recipe_image} alt='recipe display'/>
            <p>{store.recipe.description}</p>
            <RecipeIngredients recipe={store.recipe}/>
            <AddIngredient recipe={store.recipe}/>
            <p>{store.recipe.instructions}</p>
            <p>{store.recipe.cuisine}</p>
            <TotalCalories ingredients={store.recipe.ingredients}/>
            <div>
                {/* <RecipeReviews/> */}
                <div>
                    <NewRecipe/>
                    <UpdateRecipe recipe={store.recipe}/>
                    <DeleteRecipe recipe={store.recipe}/>
                </div>
                <div>
                    <RemoveLabel/>
                </div>
            </div>

        </div>
    );
}

export default SingleRecipeCrud;
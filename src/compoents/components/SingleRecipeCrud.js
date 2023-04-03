import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import RecipeWarning from './RecipeWarning';
import RecipeLabels from './RecipeLabels';
import RecipeIngredients from './RecipeIngredients';
import DeleteRecipe from '../subcomponents/DeleteRecipe';
import AddIngredient from '../form/AddIngredient';
import RemoveLabel from '../subcomponents/RemoveLabel';
import TotalCalories from './TotalCalories';
import { singleRecipeStore } from '../../data/RecipesStore';
import { useStore } from 'zustand';
import { currentRecipeStore } from '../../data/RecipesStore';

function SingleRecipeCrud(props) {
    const store = useStore(singleRecipeStore)
    const currentRecipe = useStore(currentRecipeStore)
    const [submit, setSubmit] = useState();

    useEffect(() =>{
        axios.get(`https://phase-4-project-recipes-backend.onrender.com/recipes/${currentRecipe.recipe}`).then(
            r => store.changeSingleRecipe(r.data)
        )
    },[currentRecipe])



    const handleUpdate = () => {
        setSubmit(true);
    };
    if (submit) {
        return <AddIngredient recipe={store.recipe}/> 
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
                <TotalCalories ingredients={store.recipe.ingredients}/>
            </article>

            <div>
                {/* <RecipeReviews/> */}
                <div>
                    <button onClick={handleUpdate}>Update</button>
                    <DeleteRecipe recipe={store.recipe}/>
                </div>
            </div>
        </div>
    );
}

export default SingleRecipeCrud;

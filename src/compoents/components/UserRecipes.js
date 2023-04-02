import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ListRecipe from './ListRecipe';
import axios from 'axios';
import Search from '../Search';
import Sort from '../form/Sort';
import TotalCalories from './TotalCalories';
import { useStore } from 'zustand';
import { userStore} from '../../data/RecipesStore';

function UserRecipes(props) {
    const thisUser = useStore(userStore)
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
    axios.get(`https://phase-4-project-recipes-backend.onrender.com/user/${thisUser.user.id}`).then(
   r => setRecipes(r.data.recipes)    
    )
    },[thisUser])
    console.log(recipes)
    return (
     <>
     {/* <Search/>
     <Sort/> */}
     <h1>Your Recipes</h1>
     <ListRecipe recipes={recipes}/>
     
     </>
    );
}

export default UserRecipes;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ListRecipe from './ListRecipe';
import axios from 'axios';
import { useStore } from 'zustand';
import { userStore} from '../../data/RecipesStore';
import { Link } from "react-router-dom";

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
     <Link to={`/user/${thisUser.user.id}`}>
        <div className='card' style={{width: '18rem'}}>
            <div className='card-body'>
                <h5 className='class-title'><ListRecipe recipes={recipes}/></h5>
            </div>
        </div>
     </Link>
     </>
    );
}

export default UserRecipes;
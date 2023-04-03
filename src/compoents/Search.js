import React from 'react';
import axios from 'axios';
import { useStore } from 'zustand';
import { recipesStore } from '../data/RecipesStore';

function Search() {
   
   const store = useStore(recipesStore)
    return (
      <div>
        <input type="text"
        placeholder='Search for a recipe name or cuisine'
        onChange={(e)=>{
         axios.post("https://phase-4-project-recipes-backend.onrender.com/search",{
          search:e.target.value
         }).then(
          r => {store.changeRecipes(r.data)}
         )
        }}></input>
      </div>
    );
}

export default Search;
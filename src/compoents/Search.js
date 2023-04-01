import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useStore } from 'zustand';
import { recipesStore } from '../data/RecipesStore';

function Search() {
   
   const store = useStore(recipesStore)
    return (
      <form>
        <input type="text"
        placeholder='Search for a recipe name or cuisine'
        onChange={(e)=>{
         axios.post("https://phase-4-project-recipes-backend.onrender.com/search",{
          search:e.target.value
         }).then(
          r => {store.changeRecipes(r.data)}
         )
        }}></input>
      </form>
    );
}

export default Search;
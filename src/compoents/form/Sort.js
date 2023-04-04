import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useStore } from 'zustand';
import { recipesStore } from '../../data/RecipesStore';

function Sort(props) {
 const [sort,setSort] = useState("old")
 const store = useStore(recipesStore)
 useEffect(()=>{
  axios.get(`https://phase-4-project-recipes-backend.onrender.com/sort-${sort}`).then(r => store.changeRecipes(r.data))
 },[sort])

    return (
       <div>
        <select onChange={(e) =>{setSort(e.target.value)}}>
            <option value="old">Newest</option>
            <option value="new">Oldest</option>
        </select>
       </div>
    );
}

export default Sort;
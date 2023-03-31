import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Search({store}) {
   
   
    return (
      <form>
        <input type="text"
        placeholder='Search for a recipe name or cuisine'
        onChange={(e)=>{
         axios.post("https://phase-4-project-recipes-backend.onrender.com/search",{
          search:e.target.value
         }).then(
          r => console.log(r.data)
         )
        }}></input>
      </form>
    );
}

export default Search;
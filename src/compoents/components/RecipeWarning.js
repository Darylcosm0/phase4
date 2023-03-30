import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function RecipeWarning({ingredients}) {
   const [allergies,setAllergies] = useState([])
   useEffect(()=>{
    axios.get("").then(r => {setAllergies(r.data)})
   })

    return (
        ingredients.map((ingredient)=>{
            allergies.map((allergy) =>{
                if(ingredient.name === allergy.name){
                    return <div>Caution! This recipe contains {ingredient.name},which you are allergic to.</div>
                }
                else{
                    return <div></div>
                }
            })
            })
       
    );
}

export default RecipeWarning;
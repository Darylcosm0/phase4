import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useStore } from 'zustand';
import { userStore } from '../../data/RecipesStore';


function RecipeWarning({ recipe }) {
    const currentUser = useStore(userStore)
    const [allergies,setAllergies] = useState([])
    const [ingredients,setIngredients] = useState([])
    const [allergicTo,setAllergicTo] = useState([])
    const [allergyNames,setAllergyNames] = useState([])
    useEffect(()=>{ 
     axios.get(`https://phase-4-project-recipes-backend.onrender.com/allergies/${currentUser.user.id}`).then(
        r => setAllergies(r.data)
     )
     if(recipe.ingredients !== undefined)
        setIngredients(recipe.ingredients.map((ingredient)=>{
         return  ingredient.name
        }))
    },[recipe,currentUser])
    useEffect(()=>{
        setAllergyNames(allergies.map((allergy)=> allergy.name ))
    },[allergies])
    useEffect(()=>{
        setAllergicTo(allergyNames.filter(ingredient => ingredients.includes(ingredient)))
    },[allergyNames])
    console.log(allergies)
    console.log(ingredients)
    console.log(allergicTo)
    console.log(allergyNames)
    if(allergyNames.length > 0)
    return (
    allergicTo.map(allergy=>{
           return <p>Caution! This ingredient contains {allergy} which your are allergic to</p> 
           })

    );
}

export default RecipeWarning;
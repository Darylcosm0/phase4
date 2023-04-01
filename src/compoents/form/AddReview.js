import React from 'react';
import {useStore} from "zustand"
import { userStore } from '../../data/RecipesStore';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"

function AddReview({recipe}) {
  const user = useStore(userStore)
  const [review,setReview] = useState({
    // :rating,:comment,:user_id,:recipe_id
    rating:undefined,
    comment:"",
    user_id:undefined,
    recipe_id:undefined
    
  })
  useEffect(()=>{
    setReview({
        ...review,
        user_id: user.user.id})
  },[user])

  function handleSubmit(e){
   e.preventDefault()  
   setReview({
    ...review,
    recipe_id:recipe.id
   })
    axios.post("https://phase-4-project-recipes-backend.onrender.com/reviews",review)
    console.log(review) 
  }
 console.log(user.user.id)
 
    return (
     <form onSubmit={handleSubmit}>
        <h3>Add Review</h3>
        <input type="text" placeholder='Add your rating' onChange={((e)=>{
        setReview({...review, rating:e.target.value})
        })}/>
        <textarea type="text" placeholder="Add your comment" onChange={((e)=>{
        setReview({...review, comment:e.target.value})
        })}/>
        <button type="submit">Add</button>
     </form>
    );
}

export default AddReview;
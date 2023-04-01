import React from 'react';
import {useStore} from "zustand"
import { userStore } from '../../data/RecipesStore';
import { useState } from 'react';
import { useEffect } from 'react';

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
        user_id: user.user.id,
        recipe_id:recipe.id
       })
  },[recipe])

  function handleSubmit(e){
   e.preventDefault()  
   console.log(review) 
  }
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
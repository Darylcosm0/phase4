import React from 'react';
import RemoveReview from "./RemoveReview"

function RecipeReviews({recipe}) {
    if(recipe.reviews !== undefined){
    return (
     recipe.reviews.map((review)=>{
       return <div>
        <p>{review.rating}</p>
        <p>{review.comment}</p>
        <RemoveReview recipe_id={recipe.id} review_id={review.id}/>
       </div>
     })
    )
}else{
    return "loading..."
}
}

export default RecipeReviews;
import React from 'react';
import { useStore } from 'zustand';
import { userStore, recipesStore } from '../../data/RecipesStore';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddReview({ recipe }) {
  const user = useStore(userStore);
  const store = useStore(recipesStore);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState({
    rating: undefined,
    comment: '',
    user_id: undefined,
    recipe_id: recipe.id,
  });

  useEffect(() => {
    setReview({
      ...review,
      user_id: user.user.id,
    });
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post('https://phase-4-project-recipes-backend.onrender.com/reviews', review)
      .then(() => {
        console.log('left comment');
        setIsLoading(false);
        history.push(`/recipe/${store.id}`);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Review</h3>
      <input
        type="text"
        placeholder="Add your rating"
        onChange={(e) => {
          setReview({ ...review, rating: e.target.value });
        }}
      />
      <textarea
        type="text"
        placeholder="Add your comment"
        onChange={(e) => {
          setReview({ ...review, comment: e.target.value });
        }}
      />
      {!isLoading && <button type="submit">Comment</button>}
      {isLoading && <button type="submit" disabled>Commenting...</button>}
    </form>
  );
}

export default AddReview;

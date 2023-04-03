import React from "react";
import { useState } from "react";
import { userStore } from "../../data/RecipesStore";
import { useStore } from "zustand";
import axios from "axios";
import Navigation from "../navbar/Navigation";

function AddAllergy(props) {
  const currentUser = useStore(userStore);
  const [allergy, setAllergy] = useState({ name: "", user_id: undefined });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [next, setNext] = useState(false);

  const onSkip = () => {
    setNext(true);
  };
  if (next) {
    return <Navigation />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setAllergy({
      ...allergy,
      user_id: currentUser.user.id
    });
    axios
      .post(
        "https://phase-4-project-recipes-backend.onrender.com/allergies",
        allergy
      )
      .then(() => {
        console.log("Allergies added successfully");
        setSubmitted(true);
        setIsLoading(true);
      });
  }

  if (submitted) {
    return <Navigation />;
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter allergy here"
        onChange={(e) => {
          setAllergy({ ...allergy, name: e.target.value });
        }}
      ></input>
      { !isLoading && <button type="submit">Add allergy</button>}
      { isLoading && <button type="submit" disabled>Add...</button>}
    </form>
    
    { !isLoading && <button type="submit" onClick={onSkip}>Skip</button>}
    { isLoading && <button type="submit" disabled>loading...</button>}
    </div>
  );
}

export default AddAllergy;

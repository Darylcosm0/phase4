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

  function handleSubmit(e) {
    e.preventDefault();
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
      });
  }

  if (submitted) {
    return <Navigation />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter allergy here"
        onChange={(e) => {
          setAllergy({ ...allergy, name: e.target.value });
        }}
      ></input>
      <button type="submit">Add allergy</button>
    </form>
  );
}

export default AddAllergy;

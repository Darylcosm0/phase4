import React from "react";
import { useState } from "react";
import { userStore } from "../../data/RecipesStore";
import { useStore } from "zustand";
import axios from "axios";
import Navigation from "../navbar/Navigation";
import { useEffect } from "react";

function AddAllergy(props) {
  const currentUser = useStore(userStore);
  const [allergy, setAllergy] = useState({ name: "", user_id: undefined });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [next, setNext] = useState(false);
  const [userId,setUserId] = useState(undefined)
  
  useEffect(()=>{
    setUserId(currentUser.user.id)
  },[currentUser])


  const onSkip = () => {
    setNext(true);
  };
  if (next) {
    return <Navigation />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log(userId)
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter allergy here"
        onChange={(e) => {
          setAllergy({name: e.target.value,
          user_id:userId});
        }}
        
      ></input>
      { !isLoading && <button type="submit">Add allergy</button>}
      { isLoading && <button type="submit" disabled>Add...</button>}

      { !isLoading && <button type="submit" onClick={onSkip}>Skip</button>}
      { isLoading && <button type="submit" disabled>loading...</button>}
    </form>
  
  
  );
}

export default AddAllergy;

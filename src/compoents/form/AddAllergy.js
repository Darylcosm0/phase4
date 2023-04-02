import React from "react";
import { useState } from "react";
import { userStore } from "../../data/RecipesStore";
import { useStore } from "zustand";
import axios from "axios"
import { useHistory } from "react-router-dom";


function AddAllergy(props) {

  const currentUser = useStore(userStore);
  const [allergy, setAllergy] = useState({ name: "", user_id: undefined });

  const history = useHistory();


  function handleSubmit(e) {
    e.preventDefault()
    setAllergy({
        ...allergy, user_id:currentUser.user.id
    })
    axios.post("https://phase-4-project-recipes-backend.onrender.com/allergies", 
      allergy).then(() => {
        history.push("../navbar/Navigation.js");
      });
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

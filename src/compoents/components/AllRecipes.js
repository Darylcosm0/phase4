import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListRecipe from "../navbar/ListRecipe";
import axios from "axios";

function AllRecipes(props) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/recipes").then((r) => setRecipes(r.data))
  }, [])
  console.log(recipes);
  return (
    <>
      <h1>All recipes</h1>
      <ListRecipe recipes={recipes} />
    </>
  );
}

export default AllRecipes;

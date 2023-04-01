import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListRecipe from "./ListRecipe";
import axios from "axios";
import Search from "../Search";
import Sort from "../form/Sort";
import { useStore } from "zustand";
import { recipesStore} from "../../data/RecipesStore";

function AllRecipes(props) {
  const store = useStore(recipesStore)
  useEffect(() => {
    axios.get("https://phase-4-project-recipes-backend.onrender.com/recipes").then((r) => store.changeRecipes(r.data))
  }, [])
  return (
    <>
      <Search store={store}/>
      <Sort store={store}/>
      <h1>All recipes</h1>
      <ListRecipe recipes={store.recipes} />
    </>
  );
}

export default AllRecipes;

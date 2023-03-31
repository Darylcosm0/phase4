import { create } from "zustand"

const recipesData = (set) => ({
recipes:[],
changeRecipes:(recipes) =>{
    set((state) => ({
        recipes:recipes
    }))
}
})

const recipesStore = create(recipesData)

export  {recipesStore};
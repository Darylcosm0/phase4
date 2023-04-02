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


const userData = (set) => ({
    user:{},
    changeUser:(user) =>{
        set((state) => ({
            user:user
        }))
    }
    })
    
    const userStore = create(userData)

const singleRecipeData = (set) => ({
    recipe:{},
    changeSingleRecipe:(recipe) =>{
        set((state) => ({
            recipe:recipe
        }))
    }
    })

    const singleRecipeStore = create(singleRecipeData)

const currentRecipe = (set) => ({
        recipe:undefined,
        changeCurrentRecipe:(recipe) =>{
            set((state) => ({
                recipe:recipe
            }))
        }
        })
    
    const currentRecipeStore = create(currentRecipe)
export {currentRecipeStore}
export {singleRecipeStore};
export  {recipesStore};
export {userStore};
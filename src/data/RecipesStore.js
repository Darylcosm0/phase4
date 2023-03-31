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

export  {recipesStore};
export {userStore};
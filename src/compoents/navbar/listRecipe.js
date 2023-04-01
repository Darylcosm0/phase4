import Search from "../Search";
import RecipeList from './Recipes'
import useFetch from "../useFetch";


function Recipes() {

    const {data: recipes, isLoaging, error} = useFetch('http://localhost:8000/recipes')

    return (  
        <section>
            <Search />
            {error && <h4>{error}</h4>}
            {isLoaging && <h4>Loading...</h4>}
            {recipes && <RecipeList recipes={recipes} title="All Recipes" />}
        </section>
    );
}

export default Recipes;
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeDetails = () => {

    const { id } = useParams();
    const { data: recipe, error, isLoading } = useFetch('http://localhost:8000/recipes/' + id)
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/recipes/' + id ,{
            method: 'DELETE'
        }).then(() => {
            history.push('/recipes');
        })
    };

    return (  
        <div className="recipe-details">
            { isLoading && <h1>Loading...</h1> }
            { error && <h1>{error}</h1> }
            { recipe && (
                <article>
                    <img src={recipe.image} alt={recipe.title} />
                    <h1>{recipe.title}</h1>
                    <p>You will need; {recipe.ingredients}</p>
                    <p>{recipe.description}</p>
                    <button>Update</button>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default RecipeDetails;
import { Link } from "react-router-dom";

const  RecipeList= ({recipes, title}) => {

    return (  
        <div className="recipe-list">
            <h2>{title}</h2>
            {recipes.map((recipe) => (
                <div className="card" style={{width: '18rem'}} key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`} className="deteails-preview">
                    <div className="card-body">
                        <h5 className="card-title">{recipe.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{recipe.cuisine}</h6>
                        <p className="card-text">Ingridients include: {recipe.ingredients}</p>
                    </div>
                    </Link>
                </div>
            ))}
            </div>
    );
}
 
export default  RecipeList;
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Sign-up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/user">Get user</Link>
        </li>
        <li>
          <Link to="/delete-account">Delete account</Link>
        </li>
        <li>
          <Link to="/update-account">Update account</Link>
        </li>
        <li>
          <Link to="/create-recipe">Create a new Recipe</Link>
        </li>
        <li>
          <Link to="/update-recipe">Update recipe information</Link>
        </li>
        <li>
          <Link to="/delete-recipe">Delete a recipe</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/my-recipes">My recipes</Link>
        </li>
        <li>
          <Link to="/search-recipes">Search Recipes</Link>
        </li>
        <li>
          <Link to="/sort-recipes">Sort Recipes</Link>
        </li>
        <li>
          <Link to="/create-ingredient">Create a new Ingredient</Link>
        </li>
        <li>
          <Link to="/delete-ingredient">Delete an ingredient</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

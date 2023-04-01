import './App.css';
import Navigation from './compoents/navbar/Navigation';
import SignUp from './compoents/form/Sigin-up';
import Reset from './compoents/form/Reset';
import Nav from "./compoents/navbar/Nav"
import AllRecipes from './compoents/components/AllRecipes';
import UserRecipes from './compoents/components/UserRecipes';
import SingleRecipeAll from './compoents/components/SingleRecipeAll';
import SingleRecipeCrud from './compoents/components/SingleRecipeCrud';
import Login from './compoents/form/Login';
import AddAllergy from './compoents/form/AddAllergy';


function App() {
  return (
    <div>
      <Login/>
      <AddAllergy/>
      <SingleRecipeCrud/>
      <SingleRecipeAll/>
      <AllRecipes/>
      <UserRecipes/>
      <SignUp />
      <Reset />
      <Navigation />

    </div>
  );
}

export default App;



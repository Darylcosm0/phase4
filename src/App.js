import './App.css';
import SignUp from './compoents/form/Sigin-up';
import AllRecipes from './compoents/components/AllRecipes';
import UserRecipes from './compoents/components/UserRecipes';
import SingleRecipeAll from './compoents/components/SingleRecipeAll';
import SingleRecipeCrud from './compoents/components/SingleRecipeCrud';
import Navigation from './compoents/navbar/Navigation';


function App() {
  return (
    <div>
      <SignUp />
     <Navigation />
     <SingleRecipeCrud/>
     <SingleRecipeAll/>
     <AllRecipes/>
     <UserRecipes/>
    </div>
  );
}

export default App;



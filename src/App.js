import './App.css';
import Navigation from './compoents/navbar/Navigation';
import SignUp from './compoents/form/Sigin-up';
import Reset from './compoents/form/Reset';
import Nav from "./compoents/navbar/Nav"
import AllRecipes from './compoents/components/AllRecipes';
import UserRecipes from './compoents/components/UserRecipes';


function App() {
  return (
    <div>
      <AllRecipes/>
      <UserRecipes/>
      <SignUp />
      <Reset />
      <Navigation />

    </div>
  );
}

export default App;



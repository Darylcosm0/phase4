import './App.css';
import Navigation from './compoents/navbar/Navigation';
import SignUp from './compoents/form/Sigin-up';
import Reset from './compoents/form/Reset'
import Allergy from './compoents/form/Allergy';


function App() {
  return (
    <div>
      <SignUp />
      <Reset />
      <Allergy />
      <Navigation />
    </div>
  );
}

export default App;
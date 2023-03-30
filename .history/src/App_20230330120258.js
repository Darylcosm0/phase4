import './App.css';
import Nav from "./compoents/navbar/Nav"
import Home
import SignUp from './compoents/form/Sigin-up';
import Reset from './compoents/form/Reset';
function App() {
  return (
    <div>
      <SignUp />
      <Reset />
      <Nav />
      <h1>Welcome to my React App!</h1>
    </div>
  );
}

export default App;

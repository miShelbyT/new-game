import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Nav from './Components/Nav'
import Game from './Components/Game'


function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/play" component={Game} />
      <Route path="/home" component={LandingPage} />
    </div>
  );
}

export default App;

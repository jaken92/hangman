import {StyledButton} from './components/StartButton/Button';
import Figure from './components/Figure';
import Podium from './components/Podium';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Start the game</h1>
      <StyledButton inverted="outline">Hover Me</StyledButton>
      <Podium></Podium>
     
    </div>
  );
}

export default App;

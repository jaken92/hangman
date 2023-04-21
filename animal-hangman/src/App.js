import {StyledButton} from './components/StartButton/Button';
import Figure from './components/Figure';
import Podium from './components/Podium';
import StyledLetterButton from './components/Letters'
import './App.css';


function TestBtn({ onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      Test Button
    </button>
  );
}

let word;

async function handleClick() {
  let response = await fetch('https://www.wordgamedb.com/api/v1/words/random');
  let data = await response.json();

  word = data.word;

  console.log(word);
}

function App() {
  return (
    <div className="App">
      <h1> Start the game</h1>
      <StyledButton inverted="outline">Hover Me</StyledButton>
      <Podium></Podium>
     
      <TestBtn onSquareClick={() => handleClick()}></TestBtn>

      <StyledLetterButton></StyledLetterButton>
    </div>
  );
}

export default App;

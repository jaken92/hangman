import StyledButton from './components/StartButton';
import './App.css';
import styled from 'styled-components';

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
      <TestBtn onSquareClick={() => handleClick()}></TestBtn>
    </div>
  );
}

export default App;

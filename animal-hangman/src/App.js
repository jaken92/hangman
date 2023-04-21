import {StyledButton} from './components/StartButton/Button';
import Figure from './components/Figure';
import Podium from './components/Podium';
import {StyledLetterButton} from './components/Letters'
import './App.css';
import { useState } from 'react';
// import styled from 'styled-components';

//fetching word and console logging on click TestBtn.
function TestBtn({ onSquareClick }) {
  return (
    <StyledButton className="square" onClick={onSquareClick}>
      Test Button
    </StyledButton>
  );
}

let word = 'The Word';

async function handleClick() {
  let response = await fetch('https://www.wordgamedb.com/api/v1/words/random');
  let data = await response.json();

  word = data.word;
  console.log(word);
}

//Displaying the word as a prop.

function WordContainer() {
  return <h2></h2>;
}

function App() {
  return (
    <div className="App">
      <h1> Start the game</h1>
      <StyledButton inverted="outline">Hover Me</StyledButton>
      <Podium></Podium>
     
      <TestBtn onSquareClick={() => handleClick()}></TestBtn>

      <StyledLetterButton></StyledLetterButton>
      <TestBtn onSquareClick={() => handleClick()}></TestBtn>
      <WordContainer></WordContainer>
    </div>
  );
}

export default App;

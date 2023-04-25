import { StyledButton } from './components/StartButton/Button';
import Figure from './components/Figure';
import Podium from './components/Podium';
import { WordGenerator } from './components/WordGenerator/WordGenerator';
import { Word } from './components/Word/Word';

import LetterButton from './components/Letters';
import './App.css';
import { useState } from 'react';
// import styled from 'styled-components';

//button
function RedirectButton(props) {
  const handleClick = () => {
    const element = document.getElementById(props.divId);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return <button onClick={handleClick}>Go down on page</button>;
}
let word = 'Word';
let category = 'pending';
let letters = 0;
function App() {
  async function handleClick() {
    let response = await fetch(
      'https://www.wordgamedb.com/api/v1/words/random'
    );
    let data = await response.json();

    word = data.word;
    category = data.category;
    letters = data.numLetters;
    console.log(data);
    settheWord(word);
    settheCategory(category);
    settheLetters(letters);
    let i;
  }
  const [theWord, settheWord] = useState(word);
  const [theCategory, settheCategory] = useState(category);
  const [theLetters, settheLetters] = useState(letters);
  console.log(theWord.length);

  return (

    
    <div className="App">
      <Word
        Category={theCategory}
        Word={theWord}
        Letters={theLetters}
        ClickThing={handleClick}
      ></Word>
      <h1> Start the game</h1>

      {/* <Podium></Podium>

      <LetterButton></LetterButton> */}

      <RedirectButton divId="letter-div"></RedirectButton>
      <Podium></Podium>
      <WordContainer></WordContainer>
      <div className = "LetterContainer">
      <LetterButton value = "a" buttonText = "A"></LetterButton>
      <LetterButton buttonText = "B"></LetterButton>
      <LetterButton buttonText = "C"></LetterButton>
      <LetterButton buttonText = "D"></LetterButton>
      <LetterButton buttonText = "E"></LetterButton>
      <LetterButton buttonText = "F"></LetterButton>
      <LetterButton buttonText = "G"></LetterButton>
      <LetterButton buttonText = "H"></LetterButton>
      <LetterButton buttonText = "I"></LetterButton>
      <LetterButton buttonText = "J"></LetterButton>
      <LetterButton buttonText = "K"></LetterButton>
      <LetterButton buttonText = "L"></LetterButton>
      <LetterButton buttonText = "M"></LetterButton>
      <LetterButton buttonText = "N"></LetterButton>
      <LetterButton buttonText = "O"></LetterButton>
      <LetterButton buttonText = "P"></LetterButton>
      <LetterButton buttonText = "Q"></LetterButton>
      <LetterButton buttonText = "R"></LetterButton>
      <LetterButton buttonText = "S"></LetterButton>
      <LetterButton buttonText = "T"></LetterButton>
      <LetterButton buttonText = "U"></LetterButton>
      <LetterButton buttonText = "V"></LetterButton>
      <LetterButton buttonText = "W"></LetterButton>
      <LetterButton buttonText = "X"></LetterButton>
      <LetterButton buttonText = "Y"></LetterButton>
      <LetterButton buttonText = "Z"></LetterButton>
      </div>
    </div>
  );
}

export default App;

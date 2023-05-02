import {
  StyledDiv,
  GameOverButton,
  WinningButton,
} from './components/Alert/Alert';

import Podium from './components/Podium/Podium';
import { Word } from './components/Word/Word';
import { StartButton } from './components/StartButton/Button';
import LetterButton from './components/Letters/Letters';
import './App.css';
import { useState, useEffect } from 'react';
// import styled from 'styled-components';

let word = 'word';
let category = 'pending';

function App() {
  //function for getting the data from api and setting word and category.
  async function HandleClick(props) {
    let response = await fetch(
      'https://www.wordgamedb.com/api/v1/words/random'
    );
    let data = await response.json();

    word = data.word;
    category = data.category;
    settheWord(word);
    settheCategory(category);
    setIncorrectGuesses([]);
    setGuesses([]);
    setCorrectGuesses([]);
    setTheLetters(word.split(''));
    // let i;
  }

  //function for saving a clicked letter to the guesses array:
  async function handleLetterClick(event) {
    setGuesses((guesses) => [...guesses, event.target.value]);

    if (!word.includes(event.target.value)) {
      setIncorrectGuesses((incorrectGuesses) => [
        ...incorrectGuesses,
        event.target.value,
      ]);
    }
    if (word.includes(event.target.value)) {
      setCorrectGuesses((correctGuesses) => [
        ...correctGuesses,
        event.target.value,
      ]);
    }
  }

  const [theWord, settheWord] = useState(word);
  const [theCategory, settheCategory] = useState(category);

  const [guesses, setGuesses] = useState([]); // array storing guessed letters.
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showWinning, setShowWinning] = useState(false);
  const [theLetters, setTheLetters] = useState(word.split(''));
  console.log(theLetters);

  function handleClose() {
    setShowGameOver(false);
    setShowWinning(false);
  }

  console.log(word);

  useEffect(() => {
    if (incorrectGuesses.length >= 9) {
      setTimeout(() => {
        setShowGameOver(true);
      }, 500);
   
    }
  }, [incorrectGuesses]);

  useEffect(() => {
    if (theLetters.every((value) => correctGuesses.includes(value))) {
      setTimeout(() => {
        setShowWinning(true);
      }, 500);
    }
  }, [correctGuesses, theLetters]);

  return (
    <div className="App">
      <div>
        {showGameOver && (
          <StyledDiv>
            <p>LOSER! TRY AGAIN BUDDY</p>
            <p>The correct word was: {theWord}</p>
            <GameOverButton onClick={handleClose}>Close</GameOverButton>
          </StyledDiv>
        )}
      </div>
      <div>
        {showWinning && (
          <StyledDiv>
            <p>YOU ARE A WINNER </p>
            
            <WinningButton onClick={handleClose}>Close</WinningButton>
          </StyledDiv>
        )}
      </div>

      {/* <h2>PRESS TO START THE AMAZING GAME</h2> */}
      <StartButton OnStartBtnClick={HandleClick}></StartButton>

      <Podium incorrectGuessesArray={incorrectGuesses}></Podium>
      <Word
        Category={theCategory}
        Word={theWord}
        GuessedLetters={guesses}
      ></Word>
      <div className="LetterContainer">
        <LetterButton
          value="a"
          buttonText="A"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="b"
          buttonText="B"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="c"
          buttonText="C"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="d"
          buttonText="D"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="e"
          buttonText="E"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="f"
          buttonText="F"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="g"
          buttonText="G"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="h"
          buttonText="H"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="i"
          buttonText="I"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="j"
          buttonText="J"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="k"
          buttonText="K"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="l"
          buttonText="L"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="m"
          buttonText="M"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="n"
          buttonText="N"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="o"
          buttonText="O"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="p"
          buttonText="P"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="q"
          buttonText="Q"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="r"
          buttonText="R"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="s"
          buttonText="S"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="t"
          buttonText="T"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="u"
          buttonText="U"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="v"
          buttonText="V"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="w"
          buttonText="W"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="x"
          buttonText="X"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="y"
          buttonText="Y"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
        <LetterButton
          value="z"
          buttonText="Z"
          OnLetterBtnClick={handleLetterClick}
          GuessesArray={guesses}
          CorrectGuessesArray={correctGuesses}
        ></LetterButton>
      </div>
    </div>
  );
}

export default App;

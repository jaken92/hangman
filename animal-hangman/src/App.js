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
    setRevealWord(false);
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
  const [revealWord, setRevealWord] = useState(false);
  const lettersArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
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
        setRevealWord(true);
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
           
            <GameOverButton onClick={handleClose}>Close</GameOverButton>
          </StyledDiv>
        )}
      </div>
      <div>
        {showWinning && (
          <StyledDiv>
            <p>YOU ARE A WINNER!!</p>
            <img src={require('./party.gif')} alt="loading..." />

            <WinningButton onClick={handleClose}>Close</WinningButton>
          </StyledDiv>
        )}
      </div>

      {/* <h2>PRESS TO START THE AMAZING GAME</h2> */}
      <StartButton OnStartBtnClick={HandleClick}></StartButton>

      <Podium incorrectGuessesArray={incorrectGuesses}></Podium>
      <Word
        Category={theCategory}
        TheLetters={theLetters}
        GuessedLetters={guesses}
        Reveal={revealWord}
      ></Word>
      <div className="LetterContainer">
        {lettersArray.map((letter) => (
          <LetterButton
            value={letter}
            buttonText={letter}
            OnLetterBtnClick={handleLetterClick}
            GuessesArray={guesses}
            CorrectGuessesArray={correctGuesses}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

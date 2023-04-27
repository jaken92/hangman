import { StyledButton } from './components/StartButton/Button';
import Figure from './components/Figure';
import Podium from './components/Podium';
import { Word } from './components/Word/Word';
import { StartButton } from './components/StartButton/Button';
import LetterButton from './components/Letters';
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
    let i;
  }

  //function for saving a clicked letter to the guesses array:
  async function handleLetterClick(event) {
    setGuesses((guesses) => [...guesses, event.target.value]);

    if (!word.includes(event.target.value)) {
      setIncorrectGuesses((incorrectGuesses) => [
        ...incorrectGuesses,
        event.target.value,
      ]);
      if (incorrectGuesses.length >= 6){
        window.alert("OVER");
      }
    }
  }

  const [theWord, settheWord] = useState(word);
  const [theCategory, settheCategory] = useState(category);

  const [guesses, setGuesses] = useState([]); // array storing guessed letters.
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  console.log(incorrectGuesses);

  return (
    <div className="App">
      <h1>{theWord}</h1>
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
        ></LetterButton>
        <LetterButton
          value="b"
          buttonText="B"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="c"
          buttonText="C"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="d"
          buttonText="D"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="e"
          buttonText="E"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="f"
          buttonText="F"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="g"
          buttonText="G"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="h"
          buttonText="H"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="i"
          buttonText="I"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="j"
          buttonText="J"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="k"
          buttonText="K"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="l"
          buttonText="L"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="m"
          buttonText="M"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="n"
          buttonText="N"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="o"
          buttonText="O"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="p"
          buttonText="P"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="q"
          buttonText="Q"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="r"
          buttonText="R"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="s"
          buttonText="S"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="t"
          buttonText="T"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="u"
          buttonText="U"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="v"
          buttonText="V"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="w"
          buttonText="W"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="x"
          buttonText="X"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="y"
          buttonText="Y"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
        <LetterButton
          value="z"
          buttonText="Z"
          OnLetterBtnClick={handleLetterClick}
        ></LetterButton>
      </div>
    </div>
  );
}

export default App;

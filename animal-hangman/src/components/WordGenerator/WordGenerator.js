import { useState } from 'react';
import { StyledButton } from '../StartButton/Button';
import styled from 'styled-components';
import { createElement } from 'react';
import { ReactDOM } from 'react';

let word = 'Yakka';
let category = 'pending';
let letters = 0;
export const WordGenerator = () => {
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
    for (i = 0; i < letters; i++) {
      const letterLine = createElement('div', { className: 'underline' }, '_');
      ReactDOM.render(letterLine, document.getElementById('container'));
    }
  }
  const [theWord, settheWord] = useState(word);
  const [theCategory, settheCategory] = useState(category);
  const [theLetters, settheLetters] = useState(letters);
  return (
    <StyledWrapper>
      <h1>{theWord}</h1>
      <h1>Category: {theCategory}</h1>
      <h1>Letters: {theLetters}</h1>
      <StyledButton onClick={handleClick}>Press to Start</StyledButton>
      <StyledLetterBox id="container"></StyledLetterBox>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
`;

const StyledLetterBox = styled.div`
  background-color: azure;
  justify-content: center;
  display: flex;
`;

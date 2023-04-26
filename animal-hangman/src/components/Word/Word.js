import { useState } from 'react';
import { StyledButton } from '../StartButton/Button';
import styled from 'styled-components';
import { createElement } from 'react';
import { ReactDOM } from 'react';

export const Word = ({ Category, ClickThing, Word, GuessedLetters }) => {
  const theLetters = Word.split('');

  console.log(theLetters);
  return (
    <StyledWrapper>
      <StyledWordWrapper>
        {theLetters.map(function (value, i) {
          console.log(i, value);
          return (
            <StyledSpan>
              <StyledSecretWord key={i} guesses={GuessedLetters} value={value}>
                {value}
              </StyledSecretWord>
            </StyledSpan>
          );
        })}
      </StyledWordWrapper>
      <h1>Category: {Category}</h1>
      {/* <StyledButton onClick={ClickThing}>Press to Start</StyledButton> */}
    </StyledWrapper>
  );
};

const StyledSecretWord = styled.h1`
  color: white;
  text-transform: uppercase;
  visibility: ${(props) =>
    props.guesses.includes(props.value) ? 'visible' : 'hidden'};
`;
const StyledWordWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledSpan = styled.span`
  border-bottom: 5px solid white;
  color: white;
  width: 30px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
`;

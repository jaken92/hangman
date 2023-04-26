import { useState } from 'react';
import { StyledButton } from '../StartButton/Button';
import styled from 'styled-components';
import { createElement } from 'react';
import { ReactDOM } from 'react';

export const Word = ({ Category, ClickThing, Word, Letters }) => {
  const theLetters = Word.split('');
  console.log(theLetters);
  return (
    <StyledWrapper>
      <StyledWordWrapper>
        {theLetters.map(function (value, i) {
          console.log(i, value);
          return (
            <StyledSpan>
              <h1 key={i}>{value}</h1>
            </StyledSpan>
          );
        })}
      </StyledWordWrapper>
      <h1>Category: {Category}</h1>
      <h1>Letters: {Letters}</h1>
      <StyledButton onClick={ClickThing}>Press to Start</StyledButton>
      <StyledLetterBox id="container"></StyledLetterBox>
    </StyledWrapper>
  );
};

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

const StyledLetterBox = styled.div`
  background-color: azure;
  justify-content: center;
  display: flex;
`;

import { useState } from 'react';
import { StyledButton } from '../StartButton/Button';
import styled from 'styled-components';
import { createElement } from 'react';
import { ReactDOM } from 'react';

export const Word = ({ Category, ClickThing, Word, Letters }) => {
  return (
    <StyledWrapper>
      <h1>{Word}</h1>
      <h1>Category: {Category}</h1>
      <h1>Letters: {Letters}</h1>
      <StyledButton onClick={ClickThing}>Press to Start</StyledButton>
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

import styled from 'styled-components';

const StyledLetterButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: yellow;
  color: black;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    box-shadow: 3px 3px 0px 0px orange;
    background-color: orange;
  }

  &:disabled {
    opacity: 0.7;
    cursor: inherit;
    background-color: ${(props) =>
      props.correctGuesses.includes(props.value) ? 'green' : 'red'};
  }

  &:disabled:hover {
    box-shadow: none;
  }
`;

const LetterButton = ({
  OnLetterBtnClick,
  buttonText,
  value,
  GuessesArray,
  CorrectGuessesArray,
}) => {
  if (GuessesArray.includes(value)) {
    return (
      <div id="letter-div">
        <StyledLetterButton
          disabled
          value={value}
          onClick={OnLetterBtnClick}
          className="btn"
          guesses={GuessesArray}
          correctGuesses={CorrectGuessesArray}
        >
          {buttonText}
        </StyledLetterButton>
      </div>
    );
  } else {
    return (
      <div id="letter-div">
        <StyledLetterButton
          value={value}
          onClick={OnLetterBtnClick}
          className="btn"
          guesses={GuessesArray}
          correctGuesses={CorrectGuessesArray}
        >
          {buttonText}
        </StyledLetterButton>
      </div>
    );
  }
};

export default LetterButton;

import styled from 'styled-components';

const LetterButton = ({
  OnLetterBtnClick,
  buttonText,
  value,
  GuessesArray,
}) => {
  return (
    <div id="letter-div">
      <StyledLetterButton
        value={value}
        onClick={OnLetterBtnClick}
        className="btn"
        guesses={GuessesArray}
      >
        {buttonText}
      </StyledLetterButton>
    </div>
  );
};

const StyledLetterButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: yellow;
  color: black;
  cursor: pointer;
  visibility: ${(props) =>
    props.guesses.includes(props.value) ? 'visible' : 'hidden'};

  &:hover {
    box-shadow: 3px 3px 0px 0px orange;
    background-color: orange;
  }
`;
export default LetterButton;

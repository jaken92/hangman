import styled from 'styled-components';

const LetterButton = ({
  OnLetterBtnClick,
  buttonText,
  value,
  GuessesArray,
  correctGuesses,
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
          correctGuesses={correctGuesses}
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
          correctGuesses={correctGuesses}
        >
          {buttonText}
        </StyledLetterButton>
      </div>
    );
  }
};
const StyledLetterButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: yellow;
  color: black;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 0px 0px orange;
    background-color: orange;
  }

  &:disabled {
    opacity: 0.5;
    cursor: inherit;
  }
`;
/* background-color: ${(props) =>
      props.correctGuesses.includes(props.value) ? 'green' : 'red'}; */

// const StyledLetterButton = styled.button`
//   width: 50px;
//   height: 50px;
//   border-radius: 20px;
//   background-color: yellow;
//   color: black;
//   cursor: pointer;

//   &:hover {
//     box-shadow: 3px 3px 0px 0px orange;
//     background-color: orange;
//   }
// `;

// const StyledLetterButton = styled.button`
//   width: 50px;
//   height: 50px;
//   border-radius: 20px;
//   background-color: yellow;
//   color: black;
//   cursor: pointer;
//   visibility: ${(props) =>
//     props.GuessesArray.includes(props.value) ? 'visible' : 'hidden'};

//   &:hover {
//     box-shadow: 3px 3px 0px 0px orange;
//     background-color: orange;
//   }
// `;

// const LetterButton = ({ OnLetterBtnClick, buttonText, value }) => {
//   return (
//     <div id="letter-div">
//       <StyledLetterButton
//         value={value}
//         onClick={OnLetterBtnClick}
//         className="btn"
//       >
//         {buttonText}
//       </StyledLetterButton>
//     </div>
//   );
// };

export default LetterButton;

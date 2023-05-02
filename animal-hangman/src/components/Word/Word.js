import styled from 'styled-components';

const StyledSecretWord = styled.h1`
  color: white;
  text-transform: uppercase;
  visibility: ${(props) =>
    props.guesses.includes(props.value) || props.reveal === true
      ? 'visible'
      : 'hidden'};
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

export const Word = ({ Category, TheLetters, GuessedLetters, Reveal }) => {
  return (
    <StyledWrapper>
      <StyledWordWrapper>
        {TheLetters.map(function (theLetter, i) {
          return (
            <StyledSpan key={i}>
              <StyledSecretWord
                key={i}
                guesses={GuessedLetters}
                value={theLetter}
                reveal={Reveal}
              >
                {theLetter}
              </StyledSecretWord>
            </StyledSpan>
          );
        })}
      </StyledWordWrapper>
      <h1>Category: {Category}</h1>
    </StyledWrapper>
  );
};

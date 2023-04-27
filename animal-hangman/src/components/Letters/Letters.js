import styled from 'styled-components';

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
`;

const LetterButton = ({ OnLetterBtnClick, buttonText, value}) => {
  return (
    <div id="letter-div">
      <StyledLetterButton
        value={value}
        onClick={OnLetterBtnClick}
        className="btn"  
      >
        {buttonText}
      </StyledLetterButton>
    </div>
  );
};

export default LetterButton;

import styled from 'styled-components';


 const StyledLetterButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: yellow;
  color: black;
  cursor: pointer;
`

const LetterButton = props => {
    return (
    
    <StyledLetterButton className="btn">{props.buttonText}</StyledLetterButton>
  
    )

}

export default LetterButton;




import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.inverted === 'outline' ? '#FFF' : 'hotpink'};
  color: ${(props) => (props.inverted === 'outline' ? 'hotpink' : '#FFF')};
  width: 200px;
  height: 100px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px orange;
  border: 2px solid black;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 0px 0px orange;
    background-color: ${(props) =>
      props.inverted !== 'outline' ? '#FFF' : 'hotpink'};
    color: ${(props) => (props.inverted !== 'outline' ? 'hotpink' : '#FFF')};
  }
`;

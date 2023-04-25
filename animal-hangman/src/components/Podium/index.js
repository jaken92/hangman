import styled from 'styled-components';

const StyledSvg = styled.svg`
  stroke: white;
  border: black;
  margin-top: 50rem;
`;
const StyledLine = styled.line`
  stroke-width: 8px;
`;

const Podium = () => {
  return (
    <div id="podium-div">
      <StyledSvg height="250" width="200">
        <StyledLine x1="60" y1="5" x2="180" y2="5" />
        <StyledLine x1="180" y1="0" x2="180" y2="50" />
        <StyledLine x1="60" y1="0" x2="60" y2="230" />
        <StyledLine x1="0" y1="230" x2="130" y2="230" />
      </StyledSvg>
    </div>
  );
};

export default Podium;

import React from "react";
import styled from "styled-components";

const Depth = ({ gridArea }) => {
  return <DepthContainer>Depth</DepthContainer>;
};

const DepthContainer = styled.section`
  background-color: rgba(217, 217, 217, 1);
  grid-area: ${(props) => props.gridArea};
  //   min-height: 21.875rem;
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Depth;

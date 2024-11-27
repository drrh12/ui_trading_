import React from "react";
import styled from "styled-components";

export function Trades({ gridArea }) {
  return <TradesContainer>Trades</TradesContainer>;
}

const TradesContainer = styled.article`
  background-color: rgba(217, 217, 217, 1);
  grid-area: ${(props) => props.gridArea};
  //   min-height: 21.875rem;
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import React from "react";
import styled from "styled-components";

export function TradingHeader() {
  return <HeaderContainer />;
}

const HeaderContainer = styled.header`
  background-color: rgba(217, 217, 217, 1);
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

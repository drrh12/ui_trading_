import React from "react";
import styled from "styled-components";

export function PairSelector() {
  return <PairSelectorContainer />;
}

const PairSelectorContainer = styled.nav`
  background-color: rgba(217, 217, 217, 1);
  width: 100%;
  max-width: 87.3125rem;
  height: 6.25rem;
  margin-top: 1.6875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import React from "react";
import styled from "styled-components";

export function ChartSection({ gridArea }) {
  return <ChartContainer gridArea={gridArea} />;
}

const ChartContainer = styled.section`
  background-color: rgba(217, 217, 217, 1);
  grid-area: ${(props) => props.gridArea};
  min-height: 21.875rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

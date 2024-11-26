import React from "react";
import styled from "styled-components";
import { MarketCard } from "./MarketCard";
import { TradingHeader } from "./TradingHeader";
import { PairSelector } from "./PairSelector";
import { ChartSection } from "./ChartSection";

const marketData = [
  { id: 1, gridArea: "market1" },
  { id: 2, gridArea: "chart" },
  { id: 3, gridArea: "market2" },
  { id: 4, gridArea: "market3" },
  { id: 5, gridArea: "market4" },
];

function TradingLayout() {
  return (
    <TradingContainer>
      <TradingHeader />
      <GridContainer>
        {/* <PairSelector /> */}
        <MarketCard gridArea="market1" />
        <ChartSection gridArea="chart" />
        <MarketCard gridArea="market2" />
        <MarketCard gridArea="market3" />
        <MarketCard gridArea="market4" />
      </GridContainer>
    </TradingContainer>
  );
}

const TradingContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: rgba(181, 181, 181, 1);
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  align-items: center;
  // padding: 0 1rem 2.625rem;
`;

const GridContainer = styled.section`
  display: grid;
  width: 100%;
  max-width: 87.3125rem;
  gap: 1.25rem;
  margin: 1.625rem auto;
  grid-template-areas:
    "market1 chart chart"
    "market2 market3 market4";
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 991px) {
    grid-template-areas:
      "market1"
      "chart"
      "market2"
      "market3"
      "market4";
    grid-template-columns: 1fr;
  }
`;

export default TradingLayout;

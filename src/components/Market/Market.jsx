import * as React from "react";
import styled from "styled-components";
import { MarketHeader } from "./MarketHeader";
import { CurrencyPair } from "./CurrencyPair";
import { useMarket } from "../../context/MarketContext";

export function Market() {
  const { marketData } = useMarket();
  return (
    <MarketContainer>
      <MarketHeader />
      <MarketContent>
        {marketData.map((pair, index) => (
          <CurrencyPair key={index} {...pair} />
        ))}
      </MarketContent>
    </MarketContainer>
  );
}

const MarketContainer = styled.main`
  background-color: #252930;
  display: flex;
  width: 100%;
  height: 350px;
  flex-direction: column;
  font: 400 11px Arial, sans-serif;
  box-sizing: border-box;
  padding: 16px;
`;

const MarketContent = styled.section`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

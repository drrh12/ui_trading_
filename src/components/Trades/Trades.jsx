import * as React from "react";
import styled from "styled-components";
import { useMarket } from "../../context/MarketContext";
import TradesRow from "./TradesRow";

function Trades() {
  const { marketData } = useMarket();

  return (
    <TradesSection>
      <TradesHeader>
        <HeaderItem>Amount</HeaderItem>
        <HeaderItem>Price</HeaderItem>
        <HeaderItem>Time</HeaderItem>
      </TradesHeader>
      {marketData.map((trade, index) => (
        <TradesRow
          key={index}
          amount={trade.volume}
          price={trade.bid}
          time={new Date().toLocaleTimeString()}
        />
      ))}
    </TradesSection>
  );
}

const TradesSection = styled.section`
  background-color: rgba(37, 41, 48, 1);
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  color: #fff;
  white-space: nowrap;
  //   justify-content: start;
  font: 400 11px Arial, sans-serif;
  box-sizing: border-box;
  padding: 16px;
`;

const TradesHeader = styled.header`
  background-color: rgba(37, 41, 48, 1);
  display: flex;
  width: 100%;
  justify-content: space-between; /* Keeps items spaced evenly */
  align-items: center;
`;

const HeaderItem = styled.h2`
  font-size: 11px;
  font-weight: 400;
  margin: 0;
  flex: 1; /* Equal width for each column */
  text-align: center; /* Center align text */
`;

export default Trades;

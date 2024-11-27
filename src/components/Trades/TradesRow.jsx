import * as React from "react";
import styled from "styled-components";

function TradesRow({ amount, price, time }) {
  return (
    <TradeRowContainer>
      <TradeItem>{amount}</TradeItem>
      <TradeItem>{price}</TradeItem>
      <TradeItem>{time}</TradeItem>
    </TradeRowContainer>
  );
}

const TradeRowContainer = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between; /* Keeps items spaced evenly */
  margin-top: 8px;
`;

const TradeItem = styled.p`
  margin: 0;
  flex: 1; /* Equal width for each column */
  text-align: center; /* Center align text */
  padding: 4px 0;
`;

export default TradesRow;

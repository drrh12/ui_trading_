import * as React from "react";
import styled from "styled-components";

export function CurrencyPair({ currency, pair, bid, ask, volume, change }) {
  return (
    <PairContainer>
      <PairGroup>
        <CurrencyInfo>
          <Currency>{currency}</Currency>
          <Pair>/{pair}</Pair>
        </CurrencyInfo>
        <BidPrice>{bid}</BidPrice>
        <AskPrice>{ask}</AskPrice>
        <Volume>{volume}</Volume>
        <Change isNegative={parseFloat(change) < 0}>{change}%</Change>
      </PairGroup>
    </PairContainer>
  );
}

const PairContainer = styled.article`
  width: 100%;
`;

const PairGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`;

const CurrencyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Currency = styled.span`
  color: #eaecef;
`;

const Pair = styled.span`
  color: #848e9c;
`;

const BidPrice = styled.span`
  color: rgba(14, 203, 129, 0.867);
  text-align: center;
`;

const AskPrice = styled.span`
  color: rgba(246, 70, 93, 0.506);
  text-align: center;
`;

const Volume = styled.span`
  color: #b7bdc6;
  text-align: center;
`;

const Change = styled.span`
  color: ${(props) => (props.isNegative ? "#f6465d" : "#0ecb81")};
  text-align: center;
`;

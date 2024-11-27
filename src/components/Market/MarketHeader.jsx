import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

export function MarketHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pairs = ["BTC/USD", "BTC/EUR", "ETH/USD", "ETH/EUR"];

  return (
    <HeaderContainer>
      <HeaderGroup>
        <CurrencySelector
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          Currency ▼
          {isOpen && (
            <DropdownList role="listbox">
              {pairs.map((pair, index) => (
                <ListItem key={index} role="option">
                  {pair}
                </ListItem>
              ))}
            </DropdownList>
          )}
        </CurrencySelector>
        <HeaderItem>Bid</HeaderItem>
        <HeaderItem>Ask</HeaderItem>
        <HeaderItem>Volume</HeaderItem>
        <HeaderItem>24h change</HeaderItem>
      </HeaderGroup>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #252930;
`;

const HeaderGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  padding: 8px 0;
`;

const HeaderItem = styled.div`
  color: #fff;
  text-align: center;
`;

const CurrencySelector = styled.button`
  position: relative;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font: inherit;
  text-align: left;
  padding: 0;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: #252930;
  border: 1px solid #363a45;
  border-radius: 4px;
  list-style: none;
  margin: 4px 0 0;
  padding: 0;
  width: 120px;
  z-index: 100;
`;

const ListItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  color: #fff;

  &:hover {
    background: #363a45;
  }
`;

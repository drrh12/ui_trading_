import React from "react";
import styled from "styled-components";

const Book = ({ gridArea }) => {
  return <BookContainer>Book</BookContainer>;
};

const BookContainer = styled.section`
  background-color: rgba(217, 217, 217, 1);
  grid-area: ${(props) => props.gridArea};
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Book;

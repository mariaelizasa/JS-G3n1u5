import styled from "styled-components";

export const Display = styled.div`
  display: flex;
  margin: 50px auto 60px auto;
  width: 150px;
  height: 150px;
  background-color: red;
  border: 3px solid #e5e5e5;
  background-color: #1c2b2d;
  border-radius: 5px;

  p {
    display: flex;
    margin: auto;
    color: #e6d5b8;
    font-size: 96px;
  }
`;

export const Board = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 100px);
`;

export const Cell = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  font-weight: normal;
  margin-left: -3px;
  color: #99a8b2;
  cursor: pointer;
  border: 3px solid #1f6f8b;
  height: 100px;
  margin-top: -3px;
  &:active {
    background: #1f6f8b;
    color: #e6d5b8;
  }
`;

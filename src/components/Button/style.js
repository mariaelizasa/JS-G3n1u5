import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const RedirectButton = styled.button`
  width: 320px;
  height: 80px;
  background-color: #1f6f8b;
  color: #e6d5b8;
  border: 3px solid #99a8b2;
  size: 24px;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  border-radius: 10px;
  position: fixed;
  bottom: 30px;

  @media screen and (max-width: 360px) {
    width: 300px;
  }
`;

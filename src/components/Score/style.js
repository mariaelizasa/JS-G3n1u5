import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #e6d5b8;
  position: relative;
  top: 15vh;

  h1 {
    font-weight: normal;
    font-size: 48px;
    line-height: 48px;
    color: #e6d5b8;
    margin-bottom: 15vh;
  }
  p {
    font-size: 18px;
  }

  .score {
    font-size: 96px;
    line-height: 96px;
  }
`;

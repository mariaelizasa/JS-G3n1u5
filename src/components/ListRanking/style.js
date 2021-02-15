import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${({ props }) => (props <= 3 ? "#99A8B2" : "#1F6F8B")};
  font-size: 24px;

  ul {
    display: flex;
    margin: 15px 20px;
  }
  .score {
    display: flex;
    position: absolute;
    right: 0px;
    margin: 15px 20px;
  }
`;

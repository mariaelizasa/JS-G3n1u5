import styled from "styled-components";


export const Container = styled.div`
  position: absolute;
  display: flex;
  right: ${ props => props.position === "/ranking" ? 100 : 0 };
  margin: 25px 25px; 
  cursor: pointer;

`;


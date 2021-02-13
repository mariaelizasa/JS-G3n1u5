import React from "react";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import Logo from "../../components/Logo/Logo";
import { useHistory } from "react-router-dom";

import iconImage from "../../assets/ranking.png";

 function Home() {
  const history = useHistory();

  // lembrar de por no utils
  const handleClick = () => {
    history.push("/game");
  };
  //lembrr d po no utils
  const handleIconClick = () => {
    history.push("/ranking");
  };
  return (
    <>
      <Icon selectImage={iconImage} onClick={() => handleIconClick()}></Icon>
      <Logo />
      <Button onClick={() => handleClick()} label="Iniciar Jogo"></Button>
    </>
  );
}
export default Home;
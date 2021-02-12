import React from "react";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import Logo from "../../components/Logo/Logo";
import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.png";
import iconImage from "../../assets/ranking.png";

 function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/game");
  };
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
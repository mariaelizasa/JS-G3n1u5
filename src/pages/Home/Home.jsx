import React from "react";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import Logo from "../../components/Logo/Logo"
import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    localStorage.clear();
    history.push("/game");
  };
  return (
    <>
    <i></i>
      <Logo/>
      <Button onClick={() => handleClick()} label="Iniciar Jogo"></Button>
    </>
  );
}

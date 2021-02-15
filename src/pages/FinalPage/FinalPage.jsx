import React from "react";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import Score from "../../components/Score/Score";
import { useHistory } from "react-router-dom";

import iconImage from "../../assets/fechar.png";

function Result(props) {

  
  const history = useHistory();

  // lembrar de por no utils
  const handleClick = () => {};
  //lembrr d po no utils
  const handleIconClick = () => {
    history.push("/");
  };
  return (
    <>
      <Icon selectImage={iconImage} onClick={() => handleIconClick()}></Icon>
      <Score score={props.location.state}></Score>
      
      <Button
        onClick={() => handleClick()}
        type="submit"
        label="Salvar Ranking"
      ></Button>
    </>
  );
}
export default Result;

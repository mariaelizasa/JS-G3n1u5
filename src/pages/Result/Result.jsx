import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import Score from "../../components/Score/Score";
import { useHistory } from "react-router-dom";



import iconImage from "../../assets/fechar.png";
import { Container } from "../../components/Button/style";
import axios from "axios";

import api from "../../services/api";

function Result(props) {
  const history = useHistory();
  const [name, setName] = useState("");

  // lembrar de por no utils

  const handleIconClick = () => {
    history.push("/");
  };

  console.log(api);

  const handleClick = async (e) => {
    e.preventDefault();

    const options = {
      name: name,
      score: props.location.state,
    };
   
   axios.post(`${api}/save`, options ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }

  return (
    <>
      <Icon selectImage={iconImage} onClick={() => handleIconClick()}></Icon>
      <Score score={props.location.state}></Score>
      <Container>
        <input
          className="saveInput"
          type="text"
          placeholder="Digite seu nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        ></input>
        <Button
          onClick={(e) => handleClick(e)}
          type="submit"
          label="Salvar Ranking"
        ></Button>
      </Container>
    </>
  );
}
export default Result;

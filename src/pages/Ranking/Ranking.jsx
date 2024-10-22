import React, { Fragment, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ListRanking from "../../components/ListRanking/ListRanking";
import axios from "axios";

import api from "../../services/api";

import { useHistory } from "react-router-dom";

import { override } from "../../styles/global";
import Icon from "../../components/Icon/Icon";
import iconImage from "../../assets/voltar.png";

import { Header } from "./style";

function Ranking() {
  const history = useHistory();
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const color = "#1F6F8B";

  useEffect(() => {
    axios
      .get(`${api}ranking`)
      .then((response) => {
        setRanking(response.data);
        setLoading(false);
      })
      .catch((error) => alert("There was an error fetching ranking"));
  }, []);

  const handleIconClick = () => {
    history.push("/");
  };

  const SortRanking = () => {
    ranking.sort(function (a, b) {
      return b.score - a.score;
    });
  };
  SortRanking();

  return (
    <Fragment>
      <Header>
        <Icon selectImage={iconImage} onClick={() => handleIconClick()}></Icon>
        <h1>Ranking</h1>
      </Header>

      {loading ? (
        <ClipLoader color={color} loading={loading} css={override} size={150} />
      ) : (
        <>
          {ranking.map((ranking, index) => {
            return (
              <ListRanking
                key={`id-${index}`}
                name={ranking.name}
                score={ranking.score}
                index={index + 1}
              ></ListRanking>
            );
          })}
        </>
      )}
    </Fragment>
  );
}

export default Ranking;

import React, { Fragment, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ListRanking from "../../components/ListRanking/ListRanking";
import Icon from "../../components/Icon/Icon";

import api from "../../services/api";
import { override } from "../../styles/global";
import iconImage from "../../assets/voltar.png";
import { useHistory } from "react-router-dom";

function Ranking() {
  const history = useHistory();
  const [ranking, setRanking] = useState([]);
  let [color, setColor] = useState("#1F6F8B");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api("ranking").then((response) => {
      setRanking(response.data);
      setLoading(false);
    });
  }, []);

  const SortRanking = () => {
    ranking.sort(function (a, b) {
      return b.score - a.score;
    });
  };
  SortRanking();

  //lembrr d po no utils
  const handleIconClick = () => {
    history.push("/");
  };
  return (
    <Fragment>
      <div>
      <Icon selectImage={iconImage} onClick={() => handleIconClick()}></Icon>
        <h1>Ranking</h1>
        
      </div>
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

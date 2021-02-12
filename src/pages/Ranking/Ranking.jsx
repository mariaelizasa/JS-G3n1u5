import React, { Fragment, useEffect, useState } from "react";

import api from "../../services/api";

function Ranking() {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api("ranking").then((response) => {
      setRanking(response.data);
    });
  }, []);

  console.log(ranking);
  return (
    // titulo e icone
    <Fragment>
      {/* {loading ? (
        <ClipLoader
          color={spinnerColor}
          loading={true}
          size={150}
          css={override}
        />
      ) : ( */}
      {ranking.map((ranking, index) => {
        return (
          <li
            key={`id-${index}`}
            name={ranking.name}
            score={ranking.score}
          >
            {index + 1}
            <ul>{ranking.score}</ul>
            <ul>{ranking.name}</ul>
          </li>
        );
      })}
    </Fragment>
  );
}

export default Ranking;

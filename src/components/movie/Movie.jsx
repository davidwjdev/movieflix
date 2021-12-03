import React from "react";
import moment from "moment";
import 'moment/locale/pt-br';  
import "./Movie.sass";

import { Button } from "../../components/button/Button";
import iconHeartSolid from "../../assets/icon/heart-solid.svg";
import iconStarSolid from "../../assets/icon/star-solid.svg";

export function Movie({ poster_path, release_date, vote_average, title }) {
  const dataOriginal = moment(release_date); //.format("DD [de] MMMM,YYYY");
  return (
    <div className="containerMovie">
      <div className="imgDiv">
        <img alt="Heart" src={iconHeartSolid} className="heartIcon" />
        <img alt="Movie" src={poster_path} className="imageMovie" />
        <label className="dataLabel">{dataOriginal.locale('pt').format("DD [de] MMMM, YYYY")}</label>
      </div>
      <div className="descDiv">
        <label className="titleLabel"> {title}</label>
        <div>
          <img alt="Star" src={iconStarSolid} className="starIcon" />
          <label className="titleLabel"> {vote_average}</label>
          <label className="descLabel"> Gênero </label>
        </div>
        <label className="descLabel"> R$ 79,99 </label>
      </div>
      <div className="buttonDiv">
        <Button>Adicionar</Button>
      </div>
    </div>
  );
}

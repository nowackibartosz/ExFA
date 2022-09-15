import React from "react";
import "./Card.css";

const Card = ({
  avatar,
  name,
  surname,
  street,
  postCode,
  town,
  subRegion,
  phoneNumber,
}) => {
  const style = {
    backgroundImage: `url(${avatar})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="card">
      <div className="card__avatar">
        <div className="avatar" style={style}></div>
      </div>
      <div className="card__info">
        <p>
          {name} {surname}
        </p>
        <br />

        <p>
          {street} {postCode}
        </p>
        <p>{town}</p>
        <p>{subRegion}</p>
        <br />
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
};

export default Card;

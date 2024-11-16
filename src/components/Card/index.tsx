import React from "react";
import "./styles.scss";

interface CardProps {
  imageSrc: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={text} className="card-image" />
      <div className="card-text">{text}</div>
    </div>
  );
};

export default React.memo(Card);
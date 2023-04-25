import React from "react";
import styles from "./Card.module.css";
import { Item } from "../../App";

type CardProps = {
  title: string;
  imgUrl: string;
  price: number;
  onClickPlus: (obj: Item) => void;
  id: string;
  added: boolean;
};

const Card: React.FC<CardProps> = ({
  title,
  imgUrl,
  price,
  onClickPlus,
  id,
  added = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setFavorite] = React.useState(false);

  const handlePlus = () => {
    onClickPlus({ title, imgUrl, price, id });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setFavorite(!isFavorite);
    isFavorite
      ? console.log("You Favorite deleted")
      : console.log("You Favorite");
  };

  return (
    <div className={styles.card}>
      <div className="favorite" onClick={() => onClickFavorite()}>
        <img
          className={styles.unlike}
          width={25}
          height={25}
          src={isFavorite ? "/img/like.svg" : "/img/unlike.svg"}
          alt="Unlike"
        />
      </div>
      <div>
        <ul>
          <button className={styles.selectFormat}>MP3</button>
          <button className={styles.selectFormat}>WAV</button>
        </ul>
      </div>
      <img width={133} height={133} src={imgUrl} alt="covers" />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardInfo}>
          <span>PRICE:</span>
          <b>{price} USD</b>
        </div>
        <button className={styles.button} onClick={handlePlus}>
          <img
            width={18}
            height={18}
            src={isAdded ? "/img/checked.svg" : "/img/plus.png"}
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;

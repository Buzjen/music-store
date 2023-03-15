import React from 'react';
import styles from './Card.module.css';

function Card({onClickFavorite, title, imageUrl, price, onClickPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const handlePlus = () => {
        onClickPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
        
    }

    return (
        <div className={styles.card}>
            <div className="favorite" onClick={onClickFavorite}>
                <img className={styles.unlike} width={25} height={25} src="/img/unlike.svg" alt="Unlike"/>
            </div>
                <img width={133} height={112} src={imageUrl} alt="covers"/>
                <h5>{title}</h5>
            <div className={styles.cardBottom}>
                <div className={styles.cardInfo}>
                    <span>PRICE:</span>
                    <b>{price} USD</b>
                </div>
                    <button className={styles.button} onClick={handlePlus}>
                    <img width={18}
                        height={18} 
                        src={isAdded ? "/img/checked.svg" : "/img/plus.png"} 
                        alt="Plus"/>
                    </button>
            </div>
        </div>
    );
}

export default Card;
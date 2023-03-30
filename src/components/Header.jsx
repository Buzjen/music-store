import React from "react";
import { Link } from "react-router-dom";

function Header({ onClickBasket, basketItems }) {
  const totalPrice = basketItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img
            className="headerImg"
            width={60}
            height={60}
            src="/img/logo.jpg"
            alt="logo"
          />

          <div className="headerInfo">
            <h3 className="text-Upper">Music Store</h3>
            <p>Safety Mode Organic House</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li className="li1">
          {/* <img
            className="music-icon"
            width={30}
            height={30}
            src="/img/card.png"
            alt="musc-icon"
          /> */}
          <button onClick={onClickBasket} className="total-price">
            {totalPrice} USD
          </button>
        </li>
        <li>
          <img
            className="imgFavorite"
            width={20}
            height={20}
            src="/img/like.svg"
            alt="like"
          />
        </li>
        <Link to="UserPage">
          <li>
            <img
              className="user-icon"
              width={40}
              height={40}
              src="/img/User.png"
              alt="user"
            />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;

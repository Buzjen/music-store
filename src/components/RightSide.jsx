function RightSide({ CloseBasket, onClearBasket, items = [] }) {
  return (
    <div className="overlay">
      <div className="right-side">
        <h2 className="basket-title">
          Basket
          <img
            onClick={CloseBasket}
            className="remove-img"
            width={30}
            height={30}
            src="/img/remove.svg"
            alt="Remove"
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="basket-item" key={obj.id}>
              <img
                width={100}
                height={100}
                className="basket-img"
                src={obj.imageUrl}
                alt="Covers"
              />
              <div className="basket-info">
                <p className="basket-p">{obj.title}</p>
                <b className="basket-b">{obj.price} USD</b>
              </div>
              <img
                onClick={() => onClearBasket(obj.id)}
                className="remove-img"
                width={30}
                height={30}
                src="/img/remove.svg"
                alt="Remove"
              />
            </div>
          ))}
          <div className="total">
            <span>Total:</span>
            <b>3.98 USD</b>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default RightSide;

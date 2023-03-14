function RightSide () {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="right-side">
          <h2 className="basket-title">
            Basket
            <img className="remove-img" width={30} height={30} src="/img/remove.svg" alt="Remove"/>
          </h2>
            <div className="items">

          <div className="basket-item">
                <img className="basket-img" width={100} height={100} src="/img/covers/1.jpg" alt="Covers"/>
                  <div className="basket-info">
                    <p className="basket-p">Safety Mode - Broken Heart EP</p>
                      <b className="basket-b">1.99 USD</b>
                  </div>
                    <img className="remove-img" width={30} height={30} src="/img/remove.svg" alt="Remove"/>
              </div>

          <div className="basket-item">
            <img className="basket-img" width={100} height={100} src="/img/covers/1.jpg" alt="Covers"/>
            <div className="basket-info">
              <p className="basket-p">Safety Mode - Broken Heart EP</p>
                <b className="basket-b">1.99 USD</b>
            </div>
              <img className="remove-img" width={30} height={30} src="/img/remove.svg" alt="Remove"/>
          </div>

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
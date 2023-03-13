

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img className="headerImg" width={60} height={60} src="/img/logo.jpg"/>
            <div className="headerInfo">
              <h3 className="text-Upper">Music Store</h3>
              <p>Safety Mode Organic House</p>
            </div>
        </div>
            <ul className="headerRight">
              <li className="li1">
                <img className="music-icon" width={15} height={15} src="/img/card.png"/>
                  <span>2 $ USD</span>
              </li>
              <li>
                <img width={18} height={18} src="/img/User.png"/>
              </li>
            </ul>
        </header>
        <div className="content">
          <h1 className="content-h1">All Music</h1>
          
        <div className="covers">
          <div className="card">
            <img width={133} height={112} src="/img/covers/1.jpg" alt="covers"/>
            <h5>Safety Mode - Broken Heart EP</h5>
            <div className="cardBottom">
              <div className="cardInfo">
                <span>PRICE:</span>
                <b>1,99 USD</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="Plus"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/covers/2.jpg" alt="covers"/>
            <h5>Safety Mode - Broken Heart EP</h5>
            <div className="cardBottom">
              <div className="cardInfo">
                <span>PRICE:</span>
                <b>1,99 USD</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="Plus"></img>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/covers/3.jpg" alt="covers"/>
            <h5>Safety Mode - Broken Heart EP</h5>
            <div className="cardBottom">
              <div className="cardInfo">
                <span>PRICE:</span>
                <b>1,99 USD</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="Plus"></img>
              </button>
            </div>
          </div>
        </div>

        </div>
    </div>
  );
}

export default App;

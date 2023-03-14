function Header () {
    return (
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
                <img className="music-icon" width={14} height={14} src="/img/card.png"/>
                  <span>1.99 USD</span>
              </li>
              <li>
                <img className="user-icon" width={40} height={40} src="/img/User.png"/>
              </li>
            </ul>
      </header>
    );
}

export default Header;
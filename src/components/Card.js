function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img width={25} height={25} src="/img/unlike.svg" alt="Unlike"/>
            </div>
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
    );
}

export default Card;
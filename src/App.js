import React, { useEffect } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header';
import RightSide from './components/RightSide';

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [rightSideOpen, setrightSideOpen] = React.useState(false)

  React.useEffect(() => {
    fetch('https://64113b971a5dca342586d356.mockapi.io/items').then(res => {
    return res.json()
  }).then(json => {
    setItems(json)
  })
  }, [])

  const onAddToBasket = (obj) => {
    setBasketItems(prev => [...prev, obj]);
  }

  console.log(basketItems);

  return (
    <div className="wrapper">
        {rightSideOpen && <RightSide items={basketItems} CloseBasket={() => setrightSideOpen(false)}/>}
        <Header 
          onClickBasket={() => setrightSideOpen(true)}
        />
        <div className="content">
          <div className="search">
            <h1 className="content-h1">All Music</h1>
            <div className="search-block">
              <input placeholder="Search..."/>
            </div>
          </div>
          
        <div className="covers">
          {
            items.map((item) => (
              <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imgUrl} 
              onClickFavorite={() => console.log('added')}
              onClickPlus={(obj) => onAddToBasket(obj)}
              />
            ))       
          }
        </div>
        </div>
    </div>
  );
}

export default App;

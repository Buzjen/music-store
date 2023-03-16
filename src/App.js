import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Header from './components/Header';
import RightSide from './components/RightSide';

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [rightSideOpen, setrightSideOpen] = React.useState(false)

  React.useEffect(() => {
  axios.get('https://64113b971a5dca342586d356.mockapi.io/items').then(res => {
    setItems(res.data);
  })
  axios.get('https://64113b971a5dca342586d356.mockapi.io/basket').then(res => {
    setBasketItems(res.data);
  })
  }, [])

  const onAddToBasket = (obj) => {
    axios.post('https://64113b971a5dca342586d356.mockapi.io/basket', obj);
    setBasketItems(prev => [...prev, obj]);
  }

  const onClearBasket = (id) => {
    console.log(id);
    axios.delete(`https://64113b971a5dca342586d356.mockapi.io/basket/${id}`);
    setBasketItems(prev => prev.filter(item => item.id !== id));
  }

  const onSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
        {rightSideOpen && <RightSide 
          items={basketItems}
          CloseBasket={() => setrightSideOpen(false)} 
          onClearBasket={onClearBasket}/>}
        <Header 
          onClickBasket={() => setrightSideOpen(true)}
        />
        <div className="content">
          <div className="search">
            <h1 className="content-h1">{searchValue ? `Search by: "${searchValue}"`: "All Music"}</h1>
            <div className="search-block">
              <input onChange={onSearchInput} value={searchValue} placeholder="Search..."/>
            </div>
          </div>
          
        <div className="covers">
          {
            items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
              <Card
              key={item.title}
              title={item.title}
              price={item.price}
              imageUrl={item.imgUrl} 
              onFavorite={() => console.log('You Favorite')}
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

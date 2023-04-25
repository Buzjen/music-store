import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";

import Content from "./pages/Content";
import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import RightSide from "./components/RightSide";

export type Item = {
  id: string;
  title: string;
  price: number;
  imgUrl: string;
};

export const appContext = React.createContext<Item[]>([]);

function App() {
  const [items, setItems] = React.useState<Item[]>([]);
  const [basketItems, setBasketItems] = React.useState<Item[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [rightSideOpen, setrightSideOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const basketResponse = await axios.get(
        "https://64113b971a5dca342586d356.mockapi.io/basket"
      );
      const itemsResponse = await axios.get(
        "https://64113b971a5dca342586d356.mockapi.io/items"
      );

      setIsLoading(false);

      setBasketItems(basketResponse.data);
      setItems(itemsResponse.data);

      window.scrollTo(0, 0);
    }

    fetchData();
  }, []);

  const onAddToBasket = async (obj: Item) => {
    try {
      if (basketItems.find((Baskobj: Item) => Baskobj.id === obj.id)) {
        await axios.delete(
          `https://64113b971a5dca342586d356.mockapi.io/basket/${obj.id}`
        );
        setBasketItems((prev) =>
          prev.filter((item: Item) => item.id !== obj.id)
        );
      } else {
        const { data } = await axios.post(
          "https://64113b971a5dca342586d356.mockapi.io/basket",
          obj
        );
        setBasketItems((prev) => [...prev, data]);
        console.log(obj.id);
      }
    } catch (error) {
      alert("Item not added");
    }
  };

  const onClearBasket = (id: string) => {
    console.log(id);
    axios.delete(`https://64113b971a5dca342586d356.mockapi.io/basket/${id}`);
    setBasketItems((prev) => prev.filter((item: Item) => item.id !== id));
  };

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filtered: Item[] = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="wrapper">
      <appContext.Provider value={{ basketItems, setBasketItems }}>
        {rightSideOpen && (
          <RightSide
            items={basketItems}
            CloseBasket={() => setrightSideOpen(false)}
            onClearBasket={onClearBasket}
          />
        )}
        <Header onClickBasket={() => setrightSideOpen(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Content
                filtered={filtered}
                searchValue={searchValue}
                onSearchInput={onSearchInput}
                onAddToBasket={onAddToBasket}
                basketItems={basketItems}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer>
          <h3 className="footerInfo">Test Info: "zxcQWE"</h3>
        </footer>
      </appContext.Provider>
    </div>
  );
}

export default App;

// const debounce = (func, ms) => {
//   let timeout;
//   return function () {
//     const fnCall = () => {
//       func.apply(this, arguments);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(fnCall, ms);
//   };
// };

//Debounde func example

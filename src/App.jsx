import React from "react";
import axios from "axios";

import Content from "./pages/Content";
import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import RightSide from "./components/RightSide";
import { Routes, Route } from "react-router-dom";

function App() {
  const [items, setItems] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
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
    }

    fetchData();
  }, []);

  const onAddToBasket = async (obj) => {
    try {
      if (basketItems.find((Baskobj) => Baskobj.id === obj.id)) {
        await axios.delete(
          `https://64113b971a5dca342586d356.mockapi.io/basket/${obj.id}`
        );
        setBasketItems((prev) => prev.filter((item) => item.id !== obj.id));
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

  const onClearBasket = (id) => {
    console.log(id);
    axios.delete(`https://64113b971a5dca342586d356.mockapi.io/basket/${id}`);
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="wrapper">
      {rightSideOpen && (
        <RightSide
          items={basketItems}
          CloseBasket={() => setrightSideOpen(false)}
          onClearBasket={onClearBasket}
        />
      )}
      <Header
        onClickBasket={() => setrightSideOpen(true)}
        basketItems={basketItems}
      />
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
    </div>
  );
}

export default App;

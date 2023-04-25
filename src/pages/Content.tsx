import React from "react";
import Card from "../components/Card/Card";
import CardSkeleton from "../components/Card/CardSkeleton";
import { Item } from "../App";

type ContentProps = {
  searchValue: string;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  filtered: Item[];
  basketItems: Item[];
  onAddToBasket: (obj: Item) => void;
};

const Content: React.FC<ContentProps> = ({
  searchValue,
  onSearchInput,
  isLoading,
  filtered,
  basketItems,
  onAddToBasket,
}) => {
  return (
    <div className="content">
      <div className="search">
        <h1 className="content-h1">
          {searchValue ? `Search by: "${searchValue}"` : "All Music"}
        </h1>
        <div className="search-block">
          <input
            onChange={onSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="filter">
        <li className="filterButtons">
          <button className="filterButton">Podcasts</button>
          <button className="filterButton">Singles</button>
          <button className="filterButton">Remixes</button>
        </li>
      </div>

      <div className="covers">
        {isLoading
          ? Array(10).fill(<CardSkeleton />)
          : filtered.map((item: Item) => (
              <Card
                key={item.title}
                // onFavorite={() => console.log("You Favorite")}
                onClickPlus={(obj: Item) => onAddToBasket(obj)}
                added={basketItems.some((obj: Item) => obj.id === item.id)}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                id={item.id}
              />
            ))}
      </div>
    </div>
  );
};

export default Content;

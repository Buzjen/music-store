import React from "react";
import Card from "../components/Card/Card";
import CardSkeleton from "../components/Card/CardSkeleton";

export default function Content({
  searchValue,
  onSearchInput,
  isLoading,
  filtered,
  basketItems,
  onAddToBasket,
}) {
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

      <div className="covers">
        {isLoading
          ? Array(10).fill(<CardSkeleton />)
          : filtered.map((item) => (
              <Card
                key={item.title}
                //onFavorite={() => console.log("You Favorite")}
                onClickPlus={(obj) => onAddToBasket(obj)}
                added={basketItems.some((obj) => obj.id === item.id)}
                title={item.title}
                price={item.price}
                imageUrl={item.imgUrl}
                id={item.id}
              />
            ))}
      </div>
    </div>
  );
}

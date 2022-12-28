import React from "react";


function Coin({ name, icon, price, symbol,rank }) {
  return (
    <div className="coin">
      <h1> {name}</h1>
      <img src= {icon} />
      <h3> Fiyat: {price}</h3>
      <h3> Sembol: {symbol}</h3>
      <h3>Rank:{rank}</h3>
    </div>
  );
}

export default Coin;
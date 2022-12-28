import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [ListCoins, setListCoins] = useState([]);
  const [searchBar, setsearchBar] = useState("");
 

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListCoins(response.data.coins);
        
      }
    );
  }, []);

  const filteredCoins = ListCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchBar.toLowerCase());
  });

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          placeholder="Coin ismi giriniz"
          onChange={(event) => {
            setsearchBar(event.target.value);
          }}
        />
      </div>
      <div className="card">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              rank = {coin.rank}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
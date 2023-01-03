import { useState } from "react";
import "./App.css";
import Data from "./MOCK_DATA.json";

function App() {
  const [value, setValue] = useState("");

  const userInput = function (event) {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="title">Search</h1>
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          onChange={userInput}
          value={value}
        />
        <div className="product">
          {Data.filter((item) => {
            if (value === "") return item;
            if (item.title.toLowerCase().includes(value.toLowerCase()))
              return value;
          }).map((items) => {
            return (
              <div key={items.id}>
                <img className="product-image" src={items.image} />
                <h3 className="product-title">{items.title}</h3>
                <div className="product-price">$ {items.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

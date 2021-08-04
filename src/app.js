import "./styles.css";
import React from "react";
import Search from "./components/search";

function App() {
  return (
    <div>
      <div className="search">
        <Search />
      </div>
      <div className="playlist"></div>
    </div>
  );
}

export default App;

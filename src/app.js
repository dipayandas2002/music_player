import React from "react";
import Search from "../src/components/search";
import Playlist from "../src/components/playlist";
import Player from "../src/components/player";

import {} from "../src/CSS/search.css";

function App() {
  return (
    <div>
      <div className="search">
        <Search />
      </div>
      <div className="playlist"></div>
      <div className="player"></div>
    </div>
  );
}

export default App;

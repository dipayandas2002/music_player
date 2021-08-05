import React, { useState } from "react";
import Search from "../src/components/search";
// import Playlist from "../src/components/playlist";
// import Player from "../src/components/player";
import { } from "../src/CSS/search.css";


function List(props) {

  function handleAdd() {
    props.onAdd(props.id)
  }

  return <li >
    <div>{props.name}</div>
    <button id={props.id} onClick={handleAdd}>+</button>
  </li>

}

function App() {
  const [searcharray, arrayChange] = useState([]);
  const [playlistArray, playArrayChange] = useState([]);

  
  function updateArray(array) {
    // console.log(array);
    arrayChange(() => {
      return array;
    })
  }

  function addHandler(index) {

    playArrayChange((prevValue) => {
      return [...prevValue, searcharray[index].snippet.title]
      
    })
  }


  return (
    <div style={{ display: "flex" }}>
      <div className="search">
        <Search searchFunction={updateArray} />
        <ul>
          {searcharray.map((elements, index) => {
            return <List
              id={index}
              key={index}
              name={elements.snippet.title}
              onAdd={addHandler}

            />
          })}
        </ul>


      </div>
      <div className="playlist">
        <h1>Playlist</h1>
        <ul>
          {playlistArray.map((elements, index) => {
            return <li
              id={index}
              key={index}
            >{elements}</li>
          })}

        </ul>
      </div>
      <div className="player"></div>
    </div>
  );
}

export default App;

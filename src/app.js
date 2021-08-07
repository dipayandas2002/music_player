import React, { useState } from "react";
import { Search, List } from "../src/components/search";
import PlayList from "../src/components/playlist";
import Player from "../src/components/player";

// import Player from "../src/components/player";




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
      return [...prevValue, {
        title: searcharray[index].snippet.title,
        thumbnail: searcharray[index].snippet.thumbnails.high.url,
        utubeId: searcharray[index].id.videoId
      }]

    })
  }

  function del(index) {

    playArrayChange((prevValue) => {
      // console.log(index);
      return prevValue.filter((item, id) => {
        return id !== index

      })

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
            return <PlayList
              id={index}
              key={index}
              name={elements.title}
              utubeId={elements.utubeId}
              thumbnail={elements.thumbnail}
              onDel={del}
            />
          })}

        </ul>
      </div>
      <div className="player" >
        <Player 
        array = {playlistArray} />
      </div>
    </div>
  );
}

export default App;

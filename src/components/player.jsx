import React from 'react';
import { Button } from 'react-bootstrap'
import { } from "../CSS/player.css";
import YTPlayer from "yt-player"
import { useState } from 'react';
const player = new YTPlayer('#frame', { width: 0.1, height: 0.1 })





function Player(props) {
    let i = 0;
    var j = 0;


    const [playImage, imgChange] = useState();



    function play_pause() {
        if (player.getState() === "playing") {
            player.pause()
            // console.log(props.array[i]);
        }
        else {

            if (j === 0) {
                player.load(props.array[0].utubeId)
                player.setPlaybackQuality("small")
                player.play();
                img = props.array[i].thumbnail
                console.log(img);

                j = 1;

                console.log("j =" + j);

            } else {

                player.play();
                console.log(`i = ${i}`)
            }

        }
    }

    function previous() {
        player.pause()
        i--;
        player.load(props.array[i].utubeId)
        player.play();
        img = props.array[i].thumbnail

    }
    function next() {
        player.pause()
        i++;
        img = props.array[i].thumbnail
        player.load(props.array[i].utubeId)
        player.play();


    }




    return <div>
        <div>
            <div className="image">
                <img src={playImage} alt="" />
            </div>
            <div className="name">
                <h3>name</h3>
            </div>

        </div>
        <div>
            <Button onClick={previous} className="Mybutton" varient="primary">previous</Button>
            <Button onClick={play_pause} className="Mybutton" varient="primary">play</Button>
            <Button onClick={next} className="Mybutton" varient="primary">Next</Button>
        </div>
    </div>
}


export default Player;
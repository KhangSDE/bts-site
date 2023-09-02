import React, { useState } from 'react';

function Content() {

    const [audio, setAudio] = useState(new Audio());
    const [audioPlaying, setAudioPlaying] = useState(false);

    const playAudio = () => {
    
        const audioURLs = [
            "src/audios/bm.mp3",
            "src/audios/Agust D.mp3",
            "src/audios/Awake.mp3",
            "src/audios/BST.mp3",
            "src/audios/Save.mp3",
            "src/audios/RUN BTS.mp3",
            "src/audios/ENHYPEN - FEVER.mp3",
            "src/audios/bm.mp3"
        ];

        if (!audioPlaying) {
        const randomNumber = Math.floor(Math.random() * audioURLs.length);
        const audioURLrandom = audioURLs[randomNumber];

        audio.src = audioURLrandom;
        audio.volume = 0.1;
        audio.play();
        setAudioPlaying(true);
        } 
        else {
        audio.pause();
        setAudioPlaying(false);
        }
    };

    


    return(
        <div className="content-container">

            <div className="bts-image">
                <img src="src\images\icons8-bts-logo-500.png" />
            </div>

            <div className="bts-album-container">
                <img className="album-image" src="https://i0.wp.com/cornellsun.com/wp-content/uploads/2017/09/Pg-9-arts-love.jpg?fit=1200%2C1200&ssl=1" />
                <img className="album-image" src="https://kulturnews.de/wp-content/uploads/2020/02/bildschirmfoto-2020-02-17-um-10-07-55.jpg" />
                <img className="album-image" src="https://i.pinimg.com/474x/c2/ff/7a/c2ff7ae10f71f3f419aa1801e35fd4b2.jpg" />
                <img className="album-image" src="https://upload.wikimedia.org/wikipedia/en/3/3f/BTS%2C_Wings.jpg" />
                <img className="album-image" src="https://cdn.shopify.com/s/files/1/0578/8532/7560/products/TheMostBeautifulMomentinLife_Part2.jpg?v=1629284707" />
                <img className="album-image" src="https://ipurple.eu/1553-large_default/bts-young-forever-special-album.jpg" />

            </div>

            <p className="text-1">A korean <br />Boyband</p>
            <p className="text-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia quo ut ab! Nemo, voluptate illum. Molestias blanditiis commodi doloribus reiciendis, voluptas repudiandae, natus distinctio aliquid magni, sequi impedit dolorum.</p>
            <button className="button-song" onClick={playAudio}>PLAY A SONG</button>
        </div>
    )
}
export default Content;
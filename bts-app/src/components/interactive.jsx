import React from 'react';
import { useState } from 'react';
import PopUp from './popUp';

function Interactive() {

    

    const [openPopUp, setOpenPopUp] = useState(null);

    const handleAlbumClick = (albumIndex) => {
        setOpenPopUp(albumIndex);
    }

    const handlePopUpClose = () => {
        
        setOpenPopUp(null);
        
    }

    const albums = [
        {
            img: 'https://i.scdn.co/image/ab67616d0000b2736bb2b8231817c8d205d07fb2',
            data: {
                img: 'https://i.scdn.co/image/ab67616d0000b2736bb2b8231817c8d205d07fb2',
                title: "Butter",
                info: "Butter, Christmans Ver., Party Ver.",
                year: "2021",
                audio: "src/audios/BTS - Butter (Lyrics).mp3",
            },


        },
        {
            img: "https://upload.wikimedia.org/wikipedia/en/0/04/BTS_-_Permission_to_Dance.png",
            data: {
                img: "https://upload.wikimedia.org/wikipedia/en/0/04/BTS_-_Permission_to_Dance.png",
                title: "Permission to dance",
                info: "instrumental, night ver., rnb ver.",
                year: "2021",
                audio: "src/audios/ENHYPEN - FEVER.mp3",
            }
        },
        {
            img: "https://ibighit.com/bts/images/bts/discography/take-two/album-cover.png",
            data: {
                img: "https://ibighit.com/bts/images/bts/discography/take-two/album-cover.png",
                title: "Take Two",
                info: "Released for BTS fiesta ",
                year: "2023",
                audio: "src/audios/Take Two.mp3",
            }
        },
        {
            img: "https://ibighit.com/bts/images/bts/discography/be/rwXJxHlQ87gEiJJynB1pmScl.jpg",
            data: {
                img: "https://ibighit.com/bts/images/bts/discography/be/rwXJxHlQ87gEiJJynB1pmScl.jpg",
                title: "BE",
                info: "Fifth Album of BTS",
                year: "2020",
                audio: "src/audios/Awake.mp3",
            }
        },
        {
            img: "https://ibighit.com/bts/images/bts/discography/you_never_walk_alone/album-cover.jpg",
            data: {
                img: "https://ibighit.com/bts/images/bts/discography/you_never_walk_alone/album-cover.jpg",
                title: "You Never Walk Alone",
                info: "Second Special Album of BTS",
                year: "2017",
                audio: "src/audios/Save.mp3",
            }
        },
        {
            img: "https://ibighit.com/bts/images/bts/discography/wings/album-cover.jpg",
            data: {
                img: "https://ibighit.com/bts/images/bts/discography/wings/album-cover.jpg",
                title: "Wings",
                info: "Second Full Lenght Album of BTS",
                year: "2016",
                audio: "src/audios/BST.mp3",
            }
        },
        {
            img: "https://cdns-images.dzcdn.net/images/cover/ff2321f46527178fcbe09b5164450c39/500x500.jpg",
            data: {
                img: "https://cdns-images.dzcdn.net/images/cover/ff2321f46527178fcbe09b5164450c39/500x500.jpg",
                title: "PROOF",
                info: "Last Album of BTS",
                year: "2023",
                audio: "src/audios/RUN BTS.mp3",
            }
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/en/f/f2/Agust_D_COVER.JPG",
            data: {
                img: "https://upload.wikimedia.org/wikipedia/en/f/f2/Agust_D_COVER.JPG",
                title: "Agust D",
                info: "Solo Album of Suga from BTS",
                year: "2016",
                audio: "src/audios/Agust D.mp3",
            }
        },
    ]


    return(
        <div className="interactive-container">
            <div className="input-container">
                <input type="text" placeholder="suche ein Album" />
                <img src="src\images\magnifying-glass.png" />
            </div>
        <div className="text-3">
            <p>Entdecke neue Informationen</p>
        </div>

            <div className="member-container">

                {albums.map((album, index) => (
                    <img
                        key = {index}
                        onClick={() => handleAlbumClick(index)}
                        className="song-image"
                        src={album.img}
                        />
                ))}
               
                

                 {openPopUp !== null && (<PopUp open={true} onClose={handlePopUpClose} albumData={albums[openPopUp].data} />)}  
                    
                    

            </div>
            
        </div>

        
    )
}

export default Interactive
import React from 'react';
import { useState } from 'react';

const PopUp = ({open, onClose, albumData}) => {
    if(!open) return null

    
    const [songPlay, setSongPlay] = useState(false)
    
    const [newAudio, setNewAudio] = useState(new Audio())
    
    function playSong() {
        if(!songPlay) {
            newAudio.src = albumData.audio;
            newAudio.volume = 0.5;
            newAudio.play();
            setSongPlay(true)
        } 
        else {
            newAudio.pause();
            setSongPlay(false)
        }
    }

    const handleClose = () => {
        if(songPlay) {
            newAudio.pause();
            setSongPlay(false);
            setNewAudio(null)
        }
        onClose()
    }

    return(
        <div className="album-info-container">
                        
                    <div className="close-album-info" onClick={handleClose}>
                        <img src=".\images\close.png"/>
                    </div>
                                        
                    <div className="image1">
                        <img className='image2' src={albumData.img} />
                    </div>   
                                            
                    <p className="song-text">

                    {albumData.title}
                    </p>
                    
                    <div className="songs">
                        <p>{albumData.info}</p>
                    </div>

                    <p className='year-song'>{albumData.year}</p>

                    <div className="audio">
                        <button onClick={playSong} className="play-audio">
                            Play Song
                        </button>
                    </div>
            </div>
    )
}

export default PopUp;
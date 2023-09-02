
import React from 'react';

function Navbar() {
    
    
    const scroll = () => {
        
        window.scroll({top: 1500, behavior: "smooth" });
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            window.scroll({top: 0, behavior: "smooth" });
        }
    }
    
    return(
      <>
        <header>
        
        <div className="bts-text">
            BTS
        </div>
        
        <div className="menu" onClick={scroll}>
            <img src="src\images\eeee.png" />
        </div>
            
        </header>
        </>    
    )
}

export default Navbar
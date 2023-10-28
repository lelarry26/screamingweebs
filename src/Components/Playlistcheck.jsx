import React, { useState } from 'react';

function Playlistcheck({ halloweenPlaylist }) {
   //halloweenPlaylist prop is passed to set if halloween selection is made or not to set true or false.
   const [isHalloween, setIsHalloween] = useState(false);
   return (
      <div className="playlistcheck">
         <h2>Want to be spooked?</h2>
         <label>
            <input
               type="radio"
               value="Yes!"
               checked={isHalloween}
               onChange={() => setIsHalloween(true)}
            />
            Scare me
         </label>
         <label>
            <input
               type="radio"
               value="No!"
               checked={!isHalloween}
               onChange={() => setIsHalloween(false)}
            />
            Don't scare me bro!
         </label>
         <button onClick={() => halloweenPlaylist(isHalloween) }>Select</button>
      </div>
   );
}

export default Playlistcheck;
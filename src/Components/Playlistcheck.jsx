import React, { useState } from 'react';

function Playlistcheck({ onSelect }) {
   const [halloween, setHalloween] = useState(false);

   const handleSelection = () => {
      onSelect(halloween);
   }
   return (
      <div>
         <h2>Want to be spooked?</h2>
         <label>
            <input
               type="radio"
               value="Yes!"
               checked={halloween}
               onChange={() => setHalloween(true)}
            />
            Scare me
         </label>
         <label>
            <input
               type="radio"
               value="No!"
               checked={!halloween}
               onChange={() => setHalloween(false)}
            />
            Don't scare me bro!
         </label>
         <button onClick={handleSelection}>Select</button>
      </div>
   );
}

export default Playlistcheck;
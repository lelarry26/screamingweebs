import React, { useEffect, useState } from "react";
import Playlistcheck from "./Playlistcheck";

function Tree({ isAnime, setSelectedResultData }) {
  //treeGenres state contains an array of all genres in select menu.
  const [treeGenres, updateTreeGenres] = useState([]);
  const [selectedTreeGenre, setSelectedTreeGenre] = useState("");
  const [playlistCheck, setPlaylistCheck] = useState(true);
  const treeType = isAnime ? "anime" : "manga";

  // useEffect to handle the initial fetch to populate select menu with all genres from MAL
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/genres/${treeType}?filter=genres`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("API Data:", data);
        updateTreeGenres(data.data || []);
      });
  }, [isAnime]);

  //function to fetch horror genre results only
  const halloweenPlaylist = (isHalloweenSelected) => {
    if (isHalloweenSelected) {
      const horrorUrl = `https://api.jikan.moe/v4/${treeType}?sfw&genres=14&order_by=popularity`;
      fetch(horrorUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log("Horror Data:", data);
          setSelectedResultData(data.data);
        });
    } else {
      setPlaylistCheck(false);
      console.log("User may be easily scared");
    }
  };
  //function to fetch genre results
  const genreResults = () => {
    if (selectedTreeGenre) {
      const selectedGenre = treeGenres.find(
        (genre) => genre.mal_id === parseInt(selectedTreeGenre)
      );
      if (selectedGenre) {
        const apiUrl = `https://api.jikan.moe/v4/${treeType}?sfw&genres=${selectedGenre.mal_id}&order_by=popularity`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            console.log("API Data:", data);
            setSelectedResultData(data.data);
          });
      }
    }
  };
  //sets the selected genre value to selectedTreeGenre
  const chosenTreeGenre = (e) => {
    setSelectedTreeGenre(e.target.value);
  };
  //ternary checks if setIsHalloween(true)} or not from playlistcheck component. If false, it returns the select option below. 
  return (
    <div>
      {playlistCheck ? (
        <Playlistcheck halloweenPlaylist={halloweenPlaylist} />
      ) : (
        <div className="genreselection">
          <select value={selectedTreeGenre} onChange={chosenTreeGenre}>
            <option value="">Select a genre</option>
            {treeGenres.map((genre) => (
              <option key={genre.mal_id} value={genre.mal_id}>
                {genre.name}
              </option>
            ))}
          </select>
          <button onClick={genreResults}>Show Best Matches</button>
        </div>
      )}
    </div>
  );
}

export default Tree;

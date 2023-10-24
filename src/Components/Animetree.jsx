import React, { useEffect, useState } from "react";
import Playlistcheck from "./Playlistcheck";

function Animetree() {
  const [animeGenres, updateAnimeGenres] = useState([]);
  const [selectedAnimeGenre, setSelectedAnimeGenre] = useState("");
  const [playlistCheck, setPlaylistCheck] = useState(true);

  //useEffect to handle the initial fetch to populate select menu with all genres from MAL
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        updateAnimeGenres(data.data || []);
      });
  }, []);

  //
  const handlePlaylistSelection = (isHalloweenSelected) => {
    if (isHalloweenSelected) {
      console.log("HORROR!!!");
      // Need to make horror genres only
    } else {
      setPlaylistCheck(false);
      console.log("playlistCheck set to false");
    }
  };

  //populateAnime runs once a genre is selected and the button is clicked to run this function onClick.
  //If a genre is selected, then we can use "find" to match the mal_id to the genre we have stored in our state for "selectedAnimeGenre" because of the const below.ParseInt turns the string into an integer.
  const populateAnime = () => {
    if (selectedAnimeGenre) {
      const selectedGenre = animeGenres.find(
        (genre) => genre.mal_id === parseInt(selectedAnimeGenre)
      );
      if (selectedGenre) {
        const apiUrl = `https://api.jikan.moe/v4/anime?sfw&genres=${selectedGenre.mal_id}`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            console.log("API Data:", data);
          });
      }
    }
  };

  //This function sets setSelectedAnimeGenre to the selected genre
  const chosenGenre = (e) => {
    setSelectedAnimeGenre(e.target.value);
  };

  return (
    <div>
      {playlistCheck ? (
        <Playlistcheck onSelect={handlePlaylistSelection} />
      ) : (
        <div className="genreselection">
          <select value={selectedAnimeGenre} onChange={chosenGenre}>
            <option value="">Select a genre</option>
            {animeGenres.map((genre) => (
              <option key={genre.mal_id} value={genre.mal_id}>
                {genre.name}
              </option>
            ))}
          </select>
          <button onClick={populateAnime}>Select Genre</button>
        </div>
      )}
    </div>
  );
}

export default Animetree;

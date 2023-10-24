import React, { useEffect, useState } from "react";
import Playlistcheck from "./Playlistcheck";

function Mangatree() {
  const [mangaGenres, updateMangaGenres] = useState([]);
  const [selectedMangaGenre, setSelectedMangaGenre] = useState("");
  const [playlistCheck, setPlaylistCheck] = useState(true);

  //useEffect to handle the initial fetch to populate select menu with all genres from MAL
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/genres/manga")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        updateMangaGenres(data.data || []);
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

  //populateManga runs once a genre is selected and the button is clicked to run this function onClick.
  //If a genre is selected, then we can use "find" to match the mal_id to the genre we have stored in our state for "selectedAnimeGenre" because of the const below.ParseInt turns the string into an integer.
  const populateManga = () => {
    if (selectedMangaGenre) {
      const selectedGenre = mangaGenres.find(
        (genre) => genre.mal_id === parseInt(selectedMangaGenre)
      );
      if (selectedGenre) {
        const apiUrl = `https://api.jikan.moe/v4/manga?sfw&genres=${selectedGenre.mal_id}`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            console.log("API Data:", data);
          });
      }
    }
  };

  //This function sets setSelectedMangaGenre to the selected genre
  const chosenMangaGenre = (e) => {
    setSelectedMangaGenre(e.target.value);
  };

  return (
    <div>
      {playlistCheck ? (
        <Playlistcheck onSelect={handlePlaylistSelection} />
      ) : (
        <div className="genreselection">
          <select value={selectedMangaGenre} onChange={chosenMangaGenre}>
            <option value="">Select a genre</option>
            {mangaGenres.map((genre) => (
              <option key={genre.mal_id} value={genre.mal_id}>
                {genre.name}
              </option>
            ))}
          </select>
          <button onClick={populateManga}>Select Genre</button>
        </div>
      )}
    </div>
  );
}

export default Mangatree;

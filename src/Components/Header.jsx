import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Header({ setSelectedResultData }) {
  const fetchTopAnime = () => {
    fetch("https://api.jikan.moe/v4/top/anime?sfw&filter=upcoming")
      .then((res) => res.json())
      .then((data) => {
        console.log("Top Anime Data:", data);
        setSelectedResultData(data.data);
      });
  };

  const fetchTopManga = () => {
    fetch("https://api.jikan.moe/v4/top/manga?sfw&filter=upcoming")
      .then((res) => res.json())
      .then((data) => {
        console.log("Top Manga Data:", data);
        setSelectedResultData(data.data);
      });
  };
  
  const fetchAiringAnime = () => {
    fetch("https://api.jikan.moe/v4/top/anime?sfw&filter=airing")
      .then((res) => res.json())
      .then((data) => {
        console.log("Airing Anime Data:", data);
        setSelectedResultData(data.data);
      });
  };

  const fetchPublishingManga = () => {
    fetch("https://api.jikan.moe/v4/top/manga?sfw&filter=publishing")
      .then((res) => res.json())
      .then((data) => {
        console.log("Top Publishing Data:", data);
        setSelectedResultData(data.data);
      });
  };

  return (
    <Navbar expand="lg" className="headercss">
      <Navbar.Brand className="headerimage" href="#home">
        <img
          src="https://static.wikia.nocookie.net/filthy-frank/images/7/76/Weeaboo_Jones.png"
          width="100"
          height="100"
          alt="Your Logo"
        />
      </Navbar.Brand>
      <Container>
        <Nav className="me-auto">
          <div className="centered-text">
            <Button href="/">SCREAMING WEEB HOME</Button>
            <Button onClick={fetchTopAnime} type="submit" value="Submit">
              Top Anime
            </Button>
            <Button onClick={fetchTopManga} type="submit" value="Submit">
              Top Manga
            </Button>
            <Button onClick={fetchAiringAnime} type="submit" value="Submit">
              Airing Anime
            </Button>
            <Button onClick={fetchPublishingManga} type="submit" value="Submit">
              Publishing Manga
            </Button>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Header({ setSelectedResultData }) {
  const fetchUpcomingAnime = () => {
    fetch("https://api.jikan.moe/v4/top/anime?sfw&filter=upcoming")
      .then((res) => res.json())
      .then((data) => {
        console.log("Upcoming Anime Data:", data);
        setSelectedResultData(data.data);
      });
  };

  const fetchPopularManga = () => {
    fetch("https://api.jikan.moe/v4/top/manga?sfw")
      .then((res) => res.json())
      .then((data) => {
        console.log("Popular Manga Data:", data);
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
      <Navbar.Brand className="headerimage" href="/">
        <img
          src="https://static.wikia.nocookie.net/filthy-frank/images/7/76/Weeaboo_Jones.png"
          width="100"
          height="100"
          alt="Your Logo"
        />
      </Navbar.Brand>
      <Container className="linkcontainer">
        <Nav className="centered-text">
          <div>
            <Button variant="outline-success" href="/">
              SCREAMING WEEB HOME
            </Button>
            <Button
              variant="outline-success"
              onClick={fetchUpcomingAnime}
              type="submit"
              value="Submit"
            >
              Upcoming Anime
            </Button>
            <Button
              variant="outline-success"
              onClick={fetchPopularManga}
              type="submit"
              value="Submit"
            >
              Popular Manga
            </Button>
            <Button
              variant="outline-success"
              onClick={fetchAiringAnime}
              type="submit"
              value="Submit"
            >
              Airing Anime
            </Button>
            <Button
              variant="outline-success"
              onClick={fetchPublishingManga}
              type="submit"
              value="Submit"
            >
              Publishing Manga
            </Button>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;

import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Tree from "./Components/Tree";
import { Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ResultContainer from "./Components/ResultContainer";

function App() {
  //selectedResultData state contains the array of results when a genre or horror playlist is selected. Passed into tree component and result container component.
  const [selectedResultData, setSelectedResultData] = useState([]);

  //Clears the above array when a user decides to switch from anime to manga after browsing results
  const clearSelectedResultData = () => {
    setSelectedResultData([]);
  };

  return (
    <div className="mainpage">
      <Header setSelectedResultData={setSelectedResultData} />
      <div className="mainpagebody">
        <div>
          <h1 className="treeheader">Are you a watcher or a reader today?</h1>
          <div className="chooseyourpath">
            <Link to="/anime" onClick={clearSelectedResultData}>
              Anime
            </Link>
            <Link to="/manga" onClick={clearSelectedResultData}>
              Manga
            </Link>
          </div>
          <Routes>
            <Route
              path="/anime"
              element={
                <Tree
                  isAnime={true}
                  setSelectedResultData={setSelectedResultData}
                />
              }
            />
            <Route
              path="/manga"
              element={
                <Tree
                  isAnime={false}
                  setSelectedResultData={setSelectedResultData}
                />
              }
            />
          </Routes>
          {selectedResultData.length < 1 ? null : (
            <ResultContainer selectedResultData={selectedResultData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

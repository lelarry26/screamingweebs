import "./App.css";
import Header from "./Components/Header";
import Animetree from "./Components/Animetree";
import Mangatree from "./Components/Mangatree";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="mainpage">
      <Header />
      <div className="mainpagebody">
        <div>
          <h1 className="treeheader">Are you a watcher or a reader today?</h1>
          <div className="chooseyourpath">
            <Link to="/anime">Anime</Link>
            <Link to="/manga">Manga</Link>
          </div>
          <Routes>
            <Route path="/anime" element={<Animetree />} />
            <Route path="/manga" element={<Mangatree />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

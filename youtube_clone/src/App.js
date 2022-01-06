// import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./Components/Upload";
import ViewList from "./Components/ViewList";
import Navbar from "./Components/Navbar";
import PlayVideo from "./Components/PlayVideo";

function App() {
  // console.log("pls get a life");
  const [movieArray, setMovieArray] = useState([]);
  function submitHandler(obj) {
    let video;
    if (movieArray.length > 0) {
      video = [...movieArray, obj];
    } else video = [obj];
    setMovieArray((prev) => video);

    console.log(movieArray);
  }

  return (
    <>
      {/* <h1> this is app.js</h1> */}
      <Router>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route exact path="/" element={<Upload submit={submitHandler} />} />
          <Route
            exact
            path="/upload"
            element={<Upload submit={submitHandler} />}
          />
          <Route
            exact
            path="/viewlist"
            element={<ViewList movieArray={movieArray} />}
          />
          <Route
            exact
            path="/play"
            element={<PlayVideo movieArray={movieArray} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

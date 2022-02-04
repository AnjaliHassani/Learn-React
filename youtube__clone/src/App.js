import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Upload from "./components/Upload";
import Viewlist from "./components/ViewList";
import PlayVideo from "./components/PlayVideo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  const [videos, setVideos] = useState([]);
  const submitHandler = async (obj) => {
    let vid;
    let vidId = obj.youtubeLink.split("v=")[1].substring(0, 11);
    const ytApiKey = "AIzaSyCbPEIO-doFWqVa08tb_y3DzfPt2HQChX0";
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
        vidId +
        "&key=" +
        ytApiKey
    );
    const response = await data.json();
    obj["name"] = response.items[0].snippet.title;
    if (videos.length > 0) {
      vid = [...videos, obj];
    } else {
      vid = [obj];
    }
    setVideos((prev) => vid);
  };
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/ViewList" element={<Viewlist videos={videos} />} />
        <Route
          exact
          path="/play-video/:vidID"
          element={<PlayVideo videos={videos} />}
        />
        <Route
          exact
          path="/Upload"
          element={<Upload videos={videos} submit={submitHandler} />}
        />
      </Routes>
    </Router>
  );
}
export default App;

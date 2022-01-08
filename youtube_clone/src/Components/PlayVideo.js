import React from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
function PlayVideo(props) {
  // let blah = props.movieArray[0];
  // // let n = blah.split("=");
  // // let embedID = n[-1];
  // // let embb;
  // let index;
  // let len = blah.length;
  // for (let i = 0; i < len; i++) {
  //   if (blah[i] != "=") index = i;
  //   let p = len - index;
  //   blah.substring(-p);
  // }
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("id");

  return (
    <div className="App">
      {/* <h1>Youtube Embed</h1> */}
      <YoutubeEmbed embedId={search} />
    </div>
  );
}
export default PlayVideo;

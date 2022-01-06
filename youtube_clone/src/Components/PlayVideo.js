import React from "react";
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

  return (
    <div className="App">
      {/* <h1>Youtube Embed</h1> */}
      <YoutubeEmbed embedId={"Y8Tko2YC5hA"} />
    </div>
  );
}
export default PlayVideo;

import "./PlayVideo.css";
import { useParams } from "react-router-dom";
const PlayVideo = (props) => {
  const params = useParams();
  let src = `https://www.youtube.com/embed/${params.vidID}`;
  let list = null;
  if (props.videos) {
    list = props.videos.filter((element) => element.id !== params.vidID);
    list = list.map((element) => {
      let srcSmall =
        "https://www.youtube.com/embed/" +
        `${element.youtubeLink.split("v=")[1].substring(0, 11)}`;
      return (
        <iframe
          key={element.id}
          width="500"
          height="250"
          src={srcSmall}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    });
  }
  return (
    <>
      <div style={{ marginLeft: "10px", marginRight: "10px" }}>
        <iframe
          width="100%"
          height="600"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          display: "block",
          textAlign: "-webkit-center",
        }}
      >
        <p>All available videos here are: </p>
      </div>
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>{list}</div>
    </>
  );
};
export default PlayVideo;

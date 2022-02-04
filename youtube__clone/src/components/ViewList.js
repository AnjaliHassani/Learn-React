import { useRef } from "react";
import { Link } from "react-router-dom";
import "./ViewList.css";

const ViewList = (props) => {
  const inputRef = useRef();
  const keyHandler = (event, youtubeLink) => {
    if (event.keyCode === 13) {
      let value = inputRef.current.value;
      let timeStampped = youtubeLink + "&t=" + value + "s";
      navigator.clipboard.writeText(timeStampped);
    }
  };
  if (props.videos.length > 0) {
    const listItems = props.videos.map((element) => {
      return (
        <tr key={element.id}>
          <td>{element.name}</td>
          <td>
            <Link
              to={{
                pathname: `/play-video/${element.youtubeLink
                  .split("v=")[1]
                  .substring(0, 11)}`,
              }}
            >
              {element.youtubeLink}
            </Link>
          </td>
          <td>
            <label htmlFor="time">
              Enter whatever time you want to start the video at
            </label>
            <input
              id="time"
              type="number"
              onKeyDown={(event) => keyHandler(event, element.youtubeLink)}
              ref={inputRef}
            ></input>
          </td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>link</th>
            <th>permalink</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    );
  } else
    return (
      <div style={{ display: "block", textAlign: "-webkit-center" }}>
        <h1>Currently no videos added!</h1>
      </div>
    );
};
export default ViewList;

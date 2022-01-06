import "./viewList.css";
// import history from "./../history";
// import { withRouter } from "react-router-dom";

function ViewList(props) {
  //   const history = useHistory();
  if (props.movieArray.length > 0) {
    const listItems = props.movieArray.map((element) => {
      return (
        <tr key={Math.random()}>
          <td>
            {element.linkKey}
            {/* <button>play</button> */}
          </td>
          <td>"not available"</td>
        </tr>
      );
    });
    return (
      <table id="customers">
        <thead>
          <tr>
            <th>video_link</th>
            <th>middle_video_link</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    );
  } else {
    return (
      <div>
        <h1>no videos are available</h1>
      </div>
    );
  }
}

export default ViewList;

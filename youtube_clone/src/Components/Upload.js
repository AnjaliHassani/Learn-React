import { useState, useRef } from "react";
import "./Upload.css";
function Upload(props) {
  const [data, setData] = useState("no video added");
  // let show = "blah";

  const inputRef = useRef();
  const submitFunction = (event) => {
    console.log("function is working");
    event.preventDefault();
    if (inputRef.current.value) {
      const linkValue = inputRef.current.value;
      console.log(linkValue);
      props.submit({
        linkKey: linkValue,
      });
      setData("link added successfully");
      inputRef.current.value = "";
    } else {
      setData("enter valid input");
    }
  };
  return (
    <div>
      <form>
        <label htmlFor="upload">put your link here</label>
        <input
          id="upload"
          type="url"
          required
          ref={inputRef}
          onChange={() => setData()}
        ></input>
        <button onClick={submitFunction} onClicktype="submit">
          Submit
        </button>
      </form>
      {data && (
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "500px",
            padding: "30px",
          }}
        >
          {data}
        </div>
      )}
    </div>
  );
}
export default Upload;

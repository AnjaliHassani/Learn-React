import React, { useState, useRef } from "react";
import "./Upload.css";
const Upload = (props) => {
  const [msg, setMsg] = useState();
  const linkRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      linkRef.current.value &&
      linkRef.current.value.includes("www.youtube.com/") &&
      linkRef.current.value.includes("v=")
    ) {
      const linkVal = linkRef.current.value;
      const id = linkVal.split("v=")[1].substring(0, 11);
      const response = await fetch(
        "http://img.youtube.com/vi/" + id + "/mqdefault.jpg"
      );
      if (response.status === 200) {
        if (props.videos.length > 0) {
          if (props.videos.some((item) => item.id === id)) {
            linkRef.current.value = "";
            return;
          }
        }
        props.submit({
          youtubeLink: linkVal,
          id: id,
        });
        setMsg("link added successfully");
      } else {
        setMsg("video link is not correct");
      }
    } else {
      setMsg("pls give valid input!");
    }
    linkRef.current.value = "";
  };
  return (
    <div>
      <form
        style={{
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "500px",
        }}
        onSubmit={submitHandler}
      >
        <label htmlFor="youtube-link">Enter the youtube link</label>
        <input type="url" ref={linkRef} onFocus={() => setMsg("")}></input>
        <button type="submit">Submit</button>
      </form>
      {msg && (
        <div
          style={{ marginLeft: "auto", marginRight: "auto", width: "500px" }}
        >
          {msg}
        </div>
      )}
    </div>
  );
};
export default Upload;

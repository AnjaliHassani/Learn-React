import "./App.css";
import React, { useRef, useState } from "react";
import RowsRender from "./components/rowsRender";

// import { useRef } from "react/cjs/react.production.min";
// var i;

function App() {
  var colours = ["red", "green", "yellow", "orange", "blue"];
  // var shades = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9"];
  const [result, setResult] = useState([]);
  const [playButton, setPlayButton] = useState(true);
  // const [addData, setAddData] = useState({});
  // let addData = {};
  const inputUseRef = useRef("");

  function addRowsHandler() {
    let numrows = inputUseRef.current.value;
    // for (i = 0; i < 5; i++) {
    console.log("working");
    console.log(numrows);
    let arr = [];
    for (let i = 0; i < numrows; i++) {
      arr.push({
        id: Math.random(),
        arrow: "=>",
        time: Math.floor(Math.random() * (2500 - 100 + 1)) + 100,
        colour: colours[Math.floor(Math.random() * colours.length)],
        // shade: shades[Math.floor(Math.random() * shades.length)],
        shade: Math.random().toFixed(1),
      });
    }
    setResult(arr);
    console.log(result);
  }
  function playButtonHandler() {
    console.log("playButton is working");
    if (playButton) {
      for (let i = 1; i < result.length; i++) {
        console.log(i);
        for (
          let sum = result[i - 1].time;
          sum <= result[i].time + result[i - 1].time;
          sum++
        ) {
          document.body.style.background = result[i].colour;
        }
      }
    } else {
      document.body.style.background = "black";
    }
    setPlayButton(!playButton);
  }
  return (
    <div>
      <div id="divid">
        {/* <label for="inputid">Enter the number of rows</label> */}
        <input
          id="inputid"
          name="rows"
          type="number"
          step={1}
          min="1"
          ref={inputUseRef}
        ></input>
        <button onClick={addRowsHandler}>addrows</button>{" "}
        <button onClick={playButtonHandler}>{playButton ? "▶" : "| |"}</button>{" "}
      </div>

      <table id="customers">
        <thead>
          <tr>
            <th>arrow</th>
            <th>time</th>
            <th>colour</th>
            <th>shade</th>
          </tr>
        </thead>
        <tbody>
          <RowsRender result={result} />
        </tbody>
      </table>
    </div>
  );
}

export default App;

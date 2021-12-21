import "./App.css";
import React, { useRef, useState } from "react";
import RowsRender from "./components/rowsRender";
// let globalColour;
let id;
let globalIndex;

function App() {
  const colours = ["red", "green", "yellow", "orange", "blue"];

  const [result, setResult] = useState([]);
  const [paused, setPaused] = useState(true);
  const [colourBg, setColourBg] = useState();
  const [showData, setShowData] = useState();
  const [currentResult, setCurrentResult] = useState();
  // let currentResult = {};
  const inputUseRef = useRef();

  function addRowsHandler() {
    let numrows = inputUseRef.current.value;

    let arr = [];
    for (let i = 0; i < numrows; i++) {
      arr.push({
        id: Math.random(),
        arrow: "=>",
        time: (Math.floor(Math.random() * (250 - 10 + 1)) + 10) * 10,
        colour: colours[Math.floor(Math.random() * colours.length)],

        shade: Math.random().toFixed(1),
      });
    }
    setResult(arr);
  }

  const playButtonHandler = () => {
    if (paused) {
      setPaused(false);
      var currentTime = 0;
      var index;
      if (!currentResult) {
        index = 0;
        setCurrentResult(result[0]);
      } else {
        index = result.findIndex((element) => {
          return element.id === currentResult.id;
        });
      }
      setColourBg(result[index].colour);

      globalIndex = index;

      id = setInterval(() => {
        currentTime += 10;
        if (index < result.length) setShowData(currentTime);
        else {
          return;
        }

        if (currentTime === result[index].time) {
          console.log(index);

          index++;
          globalIndex = index;
          currentTime = 0;
          if (index !== result.length) {
            setColourBg(result[index].colour);

            setCurrentResult(result[index]);
          } else {
            setPaused(true);
            setColourBg("white");
            setCurrentResult();
            inputUseRef.current.value = "";
          }
        }
      }, 10);
    } else {
      setPaused(true);
      // setShowData(result[globalIndex].time);
      clearInterval(id);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="column" style={{ background: `${colourBg}` }}></div>
        <div className="column divid">
          <input
            id="inputid"
            type="number"
            step="1"
            min="1"
            ref={inputUseRef}
          ></input>
          <button onClick={addRowsHandler}>addrows</button>{" "}
          <button onClick={playButtonHandler}>{paused ? "▶" : "| |"}</button>
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
              <RowsRender items={result} active={currentResult} />
            </tbody>
          </table>
        </div>
        <div className="column" style={{ background: `${colourBg}` }}>
          <div className="Box">{showData}</div>
        </div>
      </div>
    </div>
  );
}
export default App;

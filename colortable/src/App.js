import "./App.css";
import React, { useRef, useState } from "react";
import RowsRender from "./components/rowsRender";

let id;

function App() {
  const colours = ["red", "green", "yellow", "orange", "blue"];

  const [result, setResult] = useState([]);
  const [paused, setPaused] = useState(true);
  const [colourBg, setColourBg] = useState();
  const [showData, setShowData] = useState();
  const [currentResult, setCurrentResult] = useState();
  // const [height, setHeight] = useState(980);
  const height = window.innerHeight;

  const inputUseRef = useRef();
  const currentTimeRef = useRef();
  function addRowsHandler(event) {
    console.log(event);
    if (event.type === "click" || event.keyCode === 13) {
      let numrows = inputUseRef.current.value;
      if (numrows > 0) {
        let arr = [];
        for (let i = 0; i < numrows; i++) {
          arr.push({
            id: Math.random(),
            // arrow: "=>",
            time: (Math.floor(Math.random() * (250 - 10 + 1)) + 10) * 10,
            colour: colours[Math.floor(Math.random() * colours.length)],

            shade: Math.random().toFixed(1),
          });
        }
        setResult(arr);
      }
      setColourBg("white");
      clearInterval(id);
      setCurrentResult();
      setShowData(0);
      setPaused(true);
    }
  }

  const playButtonHandler = () => {
    if (paused) {
      setPaused(false);
      var currentTime;
      var index;
      if (+currentTimeRef.current.innerHTML > 0) {
        currentTime = +currentTimeRef.current.innerHTML;
      } else {
        currentTime = 0;
      }

      if (!currentResult) {
        index = 0;
        setCurrentResult(result[0]);
      } else {
        index = result.findIndex((element) => {
          return element.id === currentResult.id;
        });
      }
      setColourBg(result[index].colour);

      id = setInterval(() => {
        currentTime += 10;
        if (index < result.length) setShowData(currentTime);
        else {
          return;
        }

        if (currentTime === result[index].time) {
          index++;

          currentTime = 0;
          if (index !== result.length) {
            setColourBg(result[index].colour);

            setCurrentResult(result[index]);
          } else {
            setTimeout(() => {
              setPaused(true);
              setColourBg("white");
              setCurrentResult();
              inputUseRef.current.value = "";
              setShowData(0);
            }, 1000);
          }
        }
      }, 10);
    } else {
      setPaused(true);
      setColourBg("black");
      clearInterval(id);
    }
  };
  return (
    <div>
      <div className="row">
        <div
          className="column"
          style={{ background: `${colourBg}`, height: `${height}px` }}
        >
          <div className="Box1" ref={currentTimeRef}>
            {showData}
          </div>
        </div>
        <div
          className="column divid columnscroll"
          style={{ height: `${height}px` }}
        >
          <input
            id="inputid"
            type="number"
            step="1"
            min="1"
            ref={inputUseRef}
            placeholder="Enter the number of Rows"
            onKeyUp={addRowsHandler}
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
              <RowsRender
                items={result}
                active={currentResult}
                // divHeight={setHeight}
              />
            </tbody>
          </table>
        </div>
        <div
          className="column"
          style={{ background: `${colourBg}`, height: `${height}px` }}
        >
          <div className="Box" ref={currentTimeRef}>
            {showData}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

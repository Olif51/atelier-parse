import logo from "./logo.svg";
import "./App.css";
import papaparse from "papaparse";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRqCVdCvlZZLVilBghe7J3gbkM_iWj-CvmIlg7EMoHnIna0qtD8hN6PpLH6WWL5vv868M-oeHdEz_xp/pub?output=csv"
    )
      .then((response) => response.text())
      .then((data) => papaparse.parse(data))
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload madafaka.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

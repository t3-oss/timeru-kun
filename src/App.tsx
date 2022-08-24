import { useState } from "react";
import "./App.css";

function App() {
  const params = new URLSearchParams(window.location.search);
  const time = params.get("time");

  return <div className="App">{time}</div>;
}

export default App;

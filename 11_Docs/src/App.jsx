import React from "react";
import "./App.css";
import Background from "./components/background";
import Foreground from "./components/foreground";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-900">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;

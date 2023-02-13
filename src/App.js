import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";

import routes from "./routes";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

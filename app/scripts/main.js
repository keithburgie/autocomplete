/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled separately using gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from "react";
import { createRoot } from "react-dom/client";

import Menu from "./components/menu";
import Home from "./components/home";

/**
 * We can start our initial App here in the main.js file
 */
const App = () => {
  return (
    <div className="App">
      <Menu />
      <Home />
    </div>
  );
};

// Render this out using the new createRoot API
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

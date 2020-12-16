import React, { useState } from "react";
import Header from "./Header/Header";

function App() {
  // initially lite theme is active
  let [darkThemeActive, setDarkThemeActive] = useState(false);

  function switchActiveTheme() {
    if (darkThemeActive) {
      setDarkThemeActive(false);
    } else {
      setDarkThemeActive(true);
    }
  }

  return (
    <Header
      isdarkThemeActive={darkThemeActive}
      switchActiveTheme={switchActiveTheme}
    />
  );
}

export default App;

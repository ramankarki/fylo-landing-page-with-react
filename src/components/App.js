import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

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

  useEffect(() => {
    let headerHeight = document.querySelector(".header-wrapper").clientHeight;
    document.querySelector(
      ".Hero-wrapper"
    ).style.marginTop = `${headerHeight}px`;
    let headerFixedContainer = document.querySelector(".header-fixed");

    let lastScrolled = 0;

    window.addEventListener("scroll", () => {
      let scrolled = window.screenTop || document.documentElement.scrollTop;
      if (scrolled > headerHeight) {
        if (scrolled > lastScrolled) {
          headerFixedContainer.style.top = `-${headerHeight}px`;
        } else {
          headerFixedContainer.style.top = "0";
        }
        lastScrolled = scrolled;
      }
    });
  });

  return (
    <div>
      <Header
        isdarkThemeActive={darkThemeActive}
        switchActiveTheme={switchActiveTheme}
      />
      <Hero isdarkThemeActive={darkThemeActive} />
    </div>
  );
}

export default App;

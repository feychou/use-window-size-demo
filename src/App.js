import React from "react";

import SideBar from "./SideBar";
import useWindowSize from "./useWindowSize";

import "./styles.css";

const getView = (windowWidth) => {
  if (windowWidth <= 576) return "Mobile";
  if (windowWidth > 576 && windowWidth <= 768) return "Tablet";
  if (windowWidth > 768 && windowWidth <= 992) return "Small Desktop";
  return "Large desktop";
};

export default function App() {
  const windowSize = useWindowSize();

  return (
    <div className="App">
      <SideBar />
      <main>
        <h1>{`${getView(windowSize.width)} view`}</h1>
      </main>
    </div>
  );
}

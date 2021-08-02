import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import AddComment from "./Components/AddComment/AddComment";

const App = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "calc(100vh - 64px)" }}>
      <AddComment innerWidth={innerWidth} />
    </div>
  );
};

export default App;

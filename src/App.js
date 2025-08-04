// src/App.js
import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import MainPortfolio from "./MainPage"; // Your main page

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain && <SplashScreen onFinish={() => setShowMain(true)} />}
      {showMain && <MainPortfolio />}
    </>
  );
}

export default App;

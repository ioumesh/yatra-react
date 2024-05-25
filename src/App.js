import "./App.css";
import React from "react";
import { AppRoutes } from "./Routes/Router";

const AppStyles = {
  maxWidth: "1440px",
  backgroundColor: "#FDFAFA !important",
};

function App() {
  return (
    <>
      <div className="App" style={AppStyles}>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;

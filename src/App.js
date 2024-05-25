import "./App.css";
import React from 'react';
import {Homepage} from "./Components/Homepage/Homepage";

const AppStyles = {
  maxWidth: "1440px",
  backgroundColor: "#FDFAFA !important"
}

function App() {
  
  return (
    <>
      <div className="App" style={AppStyles}>
        <Homepage />
      </div>
    </>
  );
}

export default App;

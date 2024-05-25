import React from "react";
import { Navbar } from "../Header/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        LoginPage
      </div>
    </>
  );
};

export default LoginPage;

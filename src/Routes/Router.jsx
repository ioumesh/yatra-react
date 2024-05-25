import { Booking } from "../Components/Booking-page/Booking";
import SignupPage from "../Components/SignupPage/SignupPage";
import LoginPage from "../Components/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "../Components/Homepage/Homepage";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/signin" element={<LoginPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

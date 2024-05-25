import { Route } from "react-router";
import App from "../App";
import { Booking } from "../Components/Booking-page/Booking";

export const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/booking">
        <Booking />
      </Route>
    </>
  );
};

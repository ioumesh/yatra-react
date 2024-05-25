import { createContext, useState } from "react";

export const BookingDetailsContext = createContext({});

export const BookingDetailsProvider = ({ children }) => {
  
  const [flightDetails, setFlightDetails] = useState({});
  const handleFlightDetails = (d) => {
    
    setFlightDetails(d);
    console.log(flightDetails)
    console.log(d)
  };
  return (
    <BookingDetailsContext.Provider value={{flightDetails,handleFlightDetails}}>
      {children}
    </BookingDetailsContext.Provider>
  );
};

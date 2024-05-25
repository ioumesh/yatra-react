import { createContext, useState } from "react";

export const FlightDataContext = createContext([]);

export const FlightDataProvider = ({ children }) => {
  const [flightContextData, setFlightContextData] = useState([]);
  const handleFlightContextDataChange = (data) => {
    setFlightContextData(data);
  };
  const [flightDetails, setFlightDetails] = useState({});
  const handleFlightDetails = (d) => {
    setFlightDetails(d);
  };
  return (
    <FlightDataContext.Provider value={{flightContextData, handleFlightContextDataChange,flightDetails,handleFlightDetails}}>
      {children}
    </FlightDataContext.Provider>
  );
};

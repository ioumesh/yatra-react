import React from "react";
import FlightIcon from '@mui/icons-material/Flight';

const FlightStyles = {
    position: "absolute",
    top: "-15px",
    left: "0px",
    fontSize: "22px",
    zIndex: "3",
    transform: "rotate(45deg)",
    backgroundColor: "white",
    color: "#676667",
    padding: "5px",
    border: "1px solid #eae8e8",
    borderRadius: "100%"
}

export default function YatraFlightIcon() {
    return (
        <FlightIcon sx={FlightStyles} />
    );
}

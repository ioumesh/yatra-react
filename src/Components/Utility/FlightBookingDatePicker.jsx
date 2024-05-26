import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { format } from "date-fns";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function FlightBookingDatePicker() {
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);

  const handleDepartureDateChange = (newDate) => {
    setDepartureDate(newDate);
    if (returnDate && newDate >= returnDate) {
      setReturnDate(null); // Clear the return date if it's before or the same as the new departure date
    }
  };

  const handleReturnDateChange = (newDate) => {
    setReturnDate(newDate);
  };

  const formatDate = (date) => {
    return date ? format(date, "dd/MM/yyyy") : "";
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div
          style={{
            width:"400px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <DatePicker
            value={departureDate}
            onChange={handleDepartureDateChange}
            disablePast
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                value={formatDate(departureDate)}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  style: {
                    textAlign: "center",
                    color: red[500],
                    border: "none",
                    width: "150px", // Adjust width as needed
                  },
                }}
              />
            )}
            PopperProps={{
              anchorOrigin: { horizontal: "center", vertical: "bottom" },
              transformOrigin: { horizontal: "center", vertical: "top" },
            }}
          />
          <DatePicker
            value={returnDate}
            onChange={handleReturnDateChange}
            disablePast
            minDate={new Date(departureDate.getTime() + 24 * 60 * 60 * 1000)} // Ensure return date is after departure date
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                value={formatDate(returnDate)}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  style: {
                    textAlign: "center",
                    color: red[500],
                    border: "none",
                    width: "150px", // Adjust width as needed
                  },
                }}
              />
            )}
            PopperProps={{
              anchorOrigin: { horizontal: "center", vertical: "bottom" },
              transformOrigin: { horizontal: "center", vertical: "top" },
            }}
          />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export { FlightBookingDatePicker };

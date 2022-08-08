import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers";

export const BasicTimePicker = (props) => {
  const [startTime, setStartTime] = useState(new Date());
  const handleChangeTime = (newtime) => {
    setStartTime(newtime);
  };
  return (
    <Box {...props}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileTimePicker
          disableMaskedInput={true}
          label={"HH : MM"}
          onChange={handleChangeTime}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                label: {
                  color: "#43515D",
                  fontSize: "25px",
                  textAlign: "center",
                  border: "0.1px solid rgb(0,0,0,0.4)",
                  mt: "20px",
                  fontWeight: "bold",
                  px: "10px",
                  py: "20px",
                  width: "100%",
                  cursor: "pointer",
                  backgroundColor: "#F5F7F9",
                  mx: "20px",
                },
                height: "100%",
                width: "100%",
                input: {
                  display: "none",
                },
                " .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              variant={props.variant}
            />
          )}
          value={startTime}
        />
      </LocalizationProvider>
    </Box>
  );
};

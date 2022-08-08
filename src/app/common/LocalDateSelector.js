import React,{useEffect} from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import "./style.css"

function LocalDateSelector(props) {
  useEffect(() => {
    // console.log(props)
  },[props])
  const [value, setValue] = React.useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <DesktopDatePicker
        label={props.label && props.label === 'none' ? "" : "select date"}
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        style={{borderRadius : '10px !important', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px !important', borderColor : "#707070 !important"}}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default LocalDateSelector;

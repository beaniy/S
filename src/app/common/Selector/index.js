import React, { useState } from "react";
import { Select, FormControl, MenuItem, Box, Typography } from "@mui/material";
import { ExpandMore, ExpandLessRounded } from "@mui/icons-material";
import { BasicTimePicker } from "../TimePicker";

export default function BasicSelector(props) {
  const [selectedRole, setSelectedRole] = useState("");
  const handleChangeRole = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedRole(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box {...props}>
      <FormControl
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            height: props.selectorHight || "100%",
            width: props.selectorWidth || "100%",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px 3px rgba(0, 0, 0, 0.08)",
          },
          "& .MuiSelect-icon": {
            right: "14px",
            top: "calc(100% - 1.8em)",
            color: "#43515D",
            width: "40px",
            height: "35px",
          },
        }}
        variant={props.variant}
      >
        <Select
          MenuProps={{
            PaperProps: {
              sx: {
                marginTop: "10px ",
              },
            },
          }}
          IconComponent={
            props.variant === "standard" ? ExpandLessRounded : ExpandMore
          }
          displayEmpty
          renderValue={(value) =>
            value ? (
              value
            ) : (
              <Typography
                variant="span"
                sx={{ fontSize: "16px", fontWeight: 500 }}
              >
                {props.name}
              </Typography>
            )
          }
          id={props.name || "Select-id"}
          label={null}
          name={props.name || "Selector Name"}
          onChange={handleChangeRole}
          value={selectedRole}
        >
          {props.disableAll ? null : (
            <MenuItem value={props.variant === "standard" ? "" : "All"}>
              {props.variant === "standard" ? "None" : "All"}
            </MenuItem>
          )}
          {props.isTimeSelector ? (
            <Box height={"120px"}>
              <BasicTimePicker />
            </Box>
          ) : (
            props.options?.map((option) => (
              <MenuItem
                key={option.value || option}
                value={option.value || option}
                sx={{
                  borderBottom: "0.5px solid #B8C3D5",
                  fontSize: "18px",
                  fontWeight: 500,
                  py: "10px",
                  ":last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                {option.label || option}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Box>
  );
}

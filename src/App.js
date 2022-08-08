import React from "react";
import { Box, CssBaseline } from "@mui/material";
import PageRoutes from "./app/routes";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PageRoutes />
    </Box>
  );
}

export default App;

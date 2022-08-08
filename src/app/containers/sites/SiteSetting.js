import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import PageTitle from "../../common/PageTitle";

function SiteSettingsPage() {
  const floors = [
    {
      id: 1,
      floor: "Ground Floor",
    },
    {
      id: 2,
      floor: "Level 1",
    },
    {
      id: 3,
      floor: "Level 2",
    },
    {
      id: 4,
      floor: "Level 3",
    },
    {
      id: 5,
      floor: "Level 4",
    },
    {
      id: 6,
      floor: "Level 5",
    },
  ];

  return (
    <Box>
      <PageTitle title="Sites View" />
      <Box display="flex" ml={4} flexDirection="column" rowGap={10} mb="20%">
        <Box ml={1} mb={5}>
          <Button
            variant="outlined"
            sx={{ pr: 5, pl: 2, fontWeight: "bold", py: 1 }}
            color="inherit"
          >
            Decommission Site
          </Button>
        </Box>
        <Grid container justifyContent="center">
          <Grid item md={10}>
            <TableContainer component={Paper}>
              <Table
                aria-label="custom pagination table"
                className="responsive-table"
              >
                <TableHead>
                  <TableRow className="table-header">
                    <TableCell
                      align="left"
                      component="th"
                      className="t-cell"
                      style={{ width: "75%" }}
                    >
                      Floor Number / Checkpoint
                    </TableCell>
                    <TableCell align="left" component="th" className="t-cell">
                      Floor QR Code
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {floors.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell
                        align="left"
                        className="t-body-cell"
                        sx={{ fontWeight: "bold !important", py: 1, ml: 1 }}
                      >
                        {item.floor}{" "}
                        <span style={{ float: "right" }}>
                          <RemoveCircleIcon />
                        </span>
                      </TableCell>
                      <TableCell
                        align="left"
                        className="t-body-cell"
                        sx={{ fontWeight: "bold !important", py: 1, ml: 1 }}
                      >
                        Add QR Code Number
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow key="last">
                    <TableCell
                      align="left"
                      className="t-body-cell"
                      sx={{
                        fontWeight: "bold !important",
                        py: 1,
                        ml: 1,
                        color: "#75859D !important",
                      }}
                    >
                      Add Floor
                      <span style={{ float: "right", color: "black" }}>
                        <AddCircleIcon />
                      </span>
                    </TableCell>
                    <TableCell
                      align="left"
                      className="t-body-cell"
                      sx={{ fontWeight: "bold !important", py: 1, ml: 1 }}
                    >
                      Add QR Code Number
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SiteSettingsPage;

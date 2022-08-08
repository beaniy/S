import React from "react";
import { Box, Link  } from "@mui/material";
import PageTitle from "../../../common/PageTitle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
// import { blue } from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import "./style.css";

export default function UserPage() {
  const settings = [
    {
      id: 1,
      floor: "Ground Floor",
      qrCode : "",
    },
    {
        id: 2,
        floor: "Level 1",
        qrCode : "",
    },
    {
        id: 3,
        floor: "Level 1",
        qrCode : "",
    },
    {
        id: 4,
        floor: "Level 1",
        qrCode : "",
    },
    {
        id: 5,
        floor: "Level 1",
        qrCode : "",
    },
    {
        id: 6,
        floor: "Level 1",
        qrCode : "",
     },
  ];
  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="Site View"  subTitle="111, ABC Street, Sydney / Site Settings" headerTitle="Decommission Site"/>
      <Box display="flex" sx={{ my: "4rem" , mx : '6rem'}}>
        <TableContainer component={Paper} sx={{ mx: "0.8rem" }} >
          {/* <div style={{width: 'auto', overflowX: 'scroll'}}> */}
            <Table sx={{ minWidth: 'auto' }} aria-label="custom pagination table" className="responsive-table">
                <TableHead >
                    <TableRow className="table-header">
                        <TableCell align="left" component="th" className="t-cell">Floor Number / Checkpoint</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Floor QR Code </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        settings.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell  align="left" className="t-body-cell" style={{width : "57%"}}>   
                                    <div  className="custom-table-cell">
                                        <span className="add-title">{item.floor}</span>
                                        <RemoveCircleIcon className="add-icon" fontSize="large" onClick={() => alert("Do you wan't delete this entry")}/>
                                    </div> 
                                
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    <div className="bold-font">{item.qrCode === "" ? 'Add QR Code Number' : ""}</div>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                <TableRow>
                    <TableCell className="t-body-cell" direction="column" justifyContent="center">
                      <Link href="#" underline="none" >
                         <div className="custom-table-cell">
                            <span className="add-title">Add Guard</span>
                            <AddCircleIcon className="add-icon" fontSize="large" onClick={() => alert("You can Add New Entry")}/>
                        </div>  
                      </Link>
                    </TableCell>
                   
                </TableRow>
                </TableFooter>
            </Table>
            {/* </div> */}
        </TableContainer>

      </Box>
    </Box>
  );
}



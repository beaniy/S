import React from "react";
import { Box, Link  } from "@mui/material";
import PageTitle from "../../../common/PageTitle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
// import { blue } from '@mui/material/colors';


import "./style.css";

export default function SiteTeamPage() {
  const users = [
    {
      id: 1,
      role : "Client Escalation 1",
      email: "virendra.arekar@gmail.com",
      name : "Virendra Arekar",
      contact : "+91848398837"
    },
    {
        id: 2,
        role : "Client Escalation 2",
        email: "viren.arekar@gmail.com",
        name : "Vishwas Arekar",
        contact : "+918453657"
    },
    {
        id: 3,
        role : "Manager",
        email: "virendra.arekar@gmail.com",
        name : "Santosh Mende",
        contact : "+91848398837"
    },
    {
        id: 4,
        role : "Asst. Manager",
        email: "virendra.arekar@gmail.com",
        name : "Pravin Suryavanshi",
        contact : "+91848398837"
    },
    {
        id: 5,
        role : "Controller 1",
        email: "virendra.arekar@gmail.com",
        name : "Virendra Arekar",
        contact : "+91848398837"
    },
    {
        id: 6,
        role : "Controller 2",
        email: "virendra.arekar@gmail.com",
        name : "Virendra Arekar",
        contact : "+91848398837"
    },
    {
        id: 7,
        role : "Controller 3",
        email: "virendra.arekar@gmail.com",
        name : "Virendra Arekar",
        contact : "+91848398837"
    },
    {
        id: 8,
        role : "Controller 4",
        email: "virendra.arekar@gmail.com",
        name : "Virendra Arekar",
        contact : "+91848398837"
    },
    {
        id: 9,
        role : "Controller 5",
        email: "virendra.arekar@gmail.com",
        name : "Virendra Arekar",
        contact : "+91848398837"
    },
    {
        id: 10,
        role : "Controller 6",
        email: "virendra.arekar@gmail.com",
        name : "Virendra Arekar",
        contact : "+91848398837"
    }

  ];
  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="Site View" subTitle="111, ABC Street Sydney / Site Team" />
      <Box display="flex" sx={{ my: "3rem" }}>
        <TableContainer component={Paper} sx={{ mx: "0.8rem" }} >
          {/* <div style={{width: 'auto', overflowX: 'scroll'}}> */}
            <Table sx={{ minWidth: 'auto' }} aria-label="custom pagination table" className="responsive-table">
                <TableHead >
                    <TableRow className="table-header">
                        <TableCell align="left" component="th" className="t-cell">Role</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Name</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Contact</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Email</TableCell>
                        <TableCell align="left" component="th" className="t-cell" style={{width : '13%'}}>Licenses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.role}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.name}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.contact}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.email}
                                </TableCell>
                                <TableCell  align="center" className="t-body-cell">
                                <Link href="#" underline="none" className="file-class">
                                    {'View'}
                                </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
               
            </Table>
            {/* </div> */}
        </TableContainer>

      </Box>
    </Box>
  );
}



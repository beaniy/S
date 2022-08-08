import React from "react";
import { Box , Grid } from "@mui/material";
import PageTitle from "../../common/PageTitle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';


import ModernCalender from "../../common/ModernCalender"

import "./style.css";

export default function SupportPage() {
  const users = [
    {
      id: 1,
      ticket : "#78390",
      startAt : "27 Apr 2022",
      status : "Closed",
      closeAt : "25 May 2022",
      issue : "I cannot logged into my account"
    },
    {
        id: 1,
        ticket : "#78390",
        startAt : "27 Apr 2022",
        status : "Closed",
        closeAt : "25 May 2022",
        issue : "I cannot logged into my account"
    },
    {
        id: 1,
        ticket : "#78390",
        startAt : "27 Apr 2022",
        status : "Closed",
        closeAt : "25 May 2022",
        issue : "I cannot logged into my account"
    },
    {
        id: 1,
        ticket : "",
        startAt : "",
        status : "",
        closeAt : "",
        issue : ""
    },
    {
        id: 1,
        ticket : "",
        startAt : "",
        status : "",
        closeAt : "",
        issue : ""
    },
    {
        id: 1,
        ticket : "",
        startAt : "",
        status : "",
        closeAt : "",
        issue : ""
    }
  ];
 
  const handleChangePage = () => {

  }

  const handleChangeRowsPerPage = () =>{

  }

  const TablePaginationActions = () => {

  }

  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="Support"  />
      <Grid container  className="sort-box" sx={{mx : "0.4rem",mt: "5rem", pr : "2rem"}} >
            
            <Grid item xs={3}>
                <ModernCalender title={'Start Date'} date={'27 Apr 2022'} />
            </Grid>
            <Grid item xs={3}>
               <ModernCalender title={'End Date'} date={'27 Apr 2022'} />
            </Grid>
            <Grid item xs={3}>
               
            </Grid>
      </Grid>
      <Box display="flex" sx={{ my: "2rem" }}>
        <TableContainer component={Paper} sx={{ mx: "0.8rem" }} >
          {/* <div style={{width: 'auto', overflowX: 'scroll'}}> */}
            <Table sx={{ minWidth: 'auto' }} aria-label="custom pagination table" className="responsive-table">
                <TableHead >
                    <TableRow className="table-header">
                        <TableCell align="left" component="th" className="t-cell" >Ticket#</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Date Logged</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Status</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Date Closed</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Issue</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.ticket}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.startAt}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.status}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.closeAt}
                                </TableCell>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.issue}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                <TableRow >
                    <TablePagination
                    align="right"
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={5}
                    count={users.length}
                    rowsPerPage={10}
                    page={0}
                    
                    SelectProps={{
                        inputProps: {
                        'aria-label': 'rows per page',
                        },
                        native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
                </TableFooter>
            </Table>
            {/* </div> */}
        </TableContainer>

      </Box>
    </Box>
  );
}



import React from "react";
import { Box , Grid, Button, Typography,Divider  } from "@mui/material";
import PageTitle from "../../../common/PageTitle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
// import { blue } from '@mui/material/colors';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import InputLabel from '@mui/material/InputLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./style.css";

export default function TimesheetResultPage() {
  const timesheets = [
    {
      id : 1,
      timesheetDate : "27 Apr 2022",
      start : "5 am",
      finish : "5 am",
      break : "60 min",
      total : "12 hrs"
    },
    {
      id : 2,
      timesheetDate : "27 Apr 2022",
      start : "5 am",
      finish : "5 am",
      break : "60 min",
      total : "12 hrs"
    },
    {
      id : 3,
      timesheetDate : "27 Apr 2022",
      start : "5 am",
      finish : "5 am",
      break : "60 min",
      total : "12 hrs"
    },
    {
      id : 4,
      timesheetDate : "27 Apr 2022",
      start : "5 am",
      finish : "5 am",
      break : "60 min",
      total : "12 hrs"
    },
  ]

  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="Timesheets"  />
      <Grid   className="sort-box" container direction={"row"} sx={{mr : "0.8rem",mt: "3rem"}} >
            <Grid item xs={6} textAlign='center' >
              <Button variant='outlined' className="btn-input" onClick={() => {
                alert('clicked');
              }}>
                Approve
              </Button>

              <Box sx={{ height: "inherit" }} className="small-box" sx={{mr : 1.5 , my : 4}} >
                <Typography variant="h6" component="h6" className="box-heading">
                  Timesheet Week Ending 27 Apr 2002
                </Typography>
                <Divider />
                <Box sx={{ height: "inherit" }} className="hybrid-box" textAlign='left'>
                 <div>
                  <span  className="hybrid-box-heading">
                    Guard Name : 
                  </span>
                  <span  className="hybrid-box-value">
                    Satish Caubey
                  </span>
                 </div>
                 <div>
                  <span  className="hybrid-box-heading">
                    Site : 
                  </span>
                  <span  className="hybrid-box-value">
                    111 George St, Sydney NSW
                  </span>
                 </div>
                 <div>
                  <span  className="hybrid-box-heading">
                    Role : 
                  </span>
                  <span  className="hybrid-box-value">
                    Roving Guard
                  </span>
                 </div>
                 <div>
                  <span  className="hybrid-box-heading">
                    Approver : 
                  </span>
                  <span  className="hybrid-box-value">
                    John Smith
                  </span>
                 </div>
                </Box>

                <TableContainer component={Paper}  >
                  <Table sx={{ minWidth: 'auto' }} aria-label="custom pagination table" className="responsive-table">
                    <TableHead >
                        <TableRow className="table-header">
                            <TableCell align="center" component="th" className="t-cell">Date</TableCell>
                            <TableCell align="center" component="th" className="t-cell">Start</TableCell>
                            <TableCell align="center" component="th" className="t-cell">Finish</TableCell>
                            <TableCell align="center" component="th" className="t-cell">Break</TableCell>
                            <TableCell align="center" component="th" className="t-cell">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            timesheets.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell  align="center" className="t-body-cell">
                                        {item.timesheetDate}
                                    </TableCell>
                                    <TableCell align="center" className="t-body-cell">
                                        {item.start}
                                    </TableCell>
                                    <TableCell align="center" className="t-body-cell">
                                        {item.finish}
                                    </TableCell>
                                    <TableCell align="center" className="t-body-cell" >
                                        {item.break}
                                    </TableCell>
                                    <TableCell  align="center" className="t-body-cell">
                                        {item.total}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <div style={{margin : 5}}></div>
                    <TableHead >
                        <TableRow className="table-header table-bottom">
                            <TableCell align="center" component="th" className="t-cell-bottom">Total</TableCell >
                            <TableCell align="right" component="th" className="t-cell-bottom" colSpan={4}>45 Hrs</TableCell>
                          
                        </TableRow>
                    </TableHead>
                </Table>
              </TableContainer>

                <Box sx={{ height: "inherit" }} className="hybrid-bottom-box" textAlign='left'>
                  <Typography  className="hybrid-box-heading">
                    Workspace injuries : 
                  </Typography>
                  <Typography  className="hybrid-box-value" mx={{mt : 2}}>
                    I did not sustain a reportable workplace injury during this period.
                  </Typography>
                </Box>

                <Box sx={{ height: "inherit", mx : 5 }} className="hybrid-bottom-box" display="flex" justifyContent="space-around">
                  <Button variant='outlined' className="btn-input-dark" onClick={() => {
                    alert('clicked');
                  }}>
                    Approved
                  </Button>
                  <Button variant='outlined' className="btn-input-dark" onClick={() => {
                    alert('clicked');
                  }}>
                    Reject
                  </Button>
                </Box>
                <div style={{height : 90, backgroundColor : 'white'}}>

                </div>
              </Box>
              
            </Grid>
            <Grid item xs={6} textAlign='center' >
              <Button variant='outlined'  className="btn-input" onClick={() => {
                alert('clicked');
              }}>
                View
              </Button>
              <Box sx={{ height: "inherit" }} className="small-box" sx={{ml : 1.5 , my : 4}} >
                <Typography variant="h6" component="h6" className="box-heading">
                  Timesheet Week Ending 27 Apr 2002
                </Typography>
                <Divider />
                <Box sx={{ height: "inherit" }} className="hybrid-box" textAlign='left'>
                 <div>
                  <span  className="hybrid-box-heading">
                    Guard Name : 
                  </span>
                  <span  className="hybrid-box-value">
                    Satish Caubey
                  </span>
                 </div>
                 <div>
                  <span  className="hybrid-box-heading">
                    Site : 
                  </span>
                  <span  className="hybrid-box-value">
                    111 George St, Sydney NSW
                  </span>
                 </div>
                 <div>
                  <span  className="hybrid-box-heading">
                    Role : 
                  </span>
                  <span  className="hybrid-box-value">
                    Roving Guard
                  </span>
                 </div>
                 <div>
                  <span  className="hybrid-box-heading">
                    Approver : 
                  </span>
                  <span  className="hybrid-box-value">
                    John Smith
                  </span>
                 </div>
                </Box>
                <TableContainer component={Paper}  >
                  <Table sx={{ minWidth: 'auto' }} aria-label="custom pagination table" className="responsive-table">
                    <TableHead >
                        <TableRow className="table-header">
                            <TableCell align="center" component="th" className="t-cell">Date</TableCell>
                            <TableCell align="center" component="th" className="t-cell">Start</TableCell>
                            <TableCell align="center" component="th" className="t-cell">Finish</TableCell>
                            <TableCell align="center" component="th" className="t-cell">Break</TableCell>
                            <TableCell align="center" component="th" className="t-cell">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            timesheets.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell  align="center" className="t-body-cell">
                                        {item.timesheetDate}
                                    </TableCell>
                                    <TableCell align="center" className="t-body-cell">
                                        {item.start}
                                    </TableCell>
                                    <TableCell align="center" className="t-body-cell">
                                        {item.finish}
                                    </TableCell>
                                    <TableCell align="center" className="t-body-cell" >
                                        {item.break}
                                    </TableCell>
                                    <TableCell  align="center" className="t-body-cell">
                                        {item.total}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <div style={{margin : 5}}></div>
                    <TableHead >
                        <TableRow className="table-header table-bottom">
                            <TableCell align="center" component="th" className="t-cell-bottom">Total</TableCell >
                            <TableCell align="right" component="th" className="t-cell-bottom" colSpan={4}>45 Hrs</TableCell>
                          
                        </TableRow>
                    </TableHead>
                </Table>
              </TableContainer>
                <Box sx={{ height: "inherit" }} className="hybrid-bottom-box" textAlign='left'>
                  <Typography  className="hybrid-box-heading">
                    Workspace injuries : 
                  </Typography>
                  <Typography  className="hybrid-box-value" mx={{mt : 2}}>
                    I did not sustain a reportable workplace injury during this period.
                  </Typography>
                </Box>
                <Box sx={{ height: "inherit" }} className="hybrid-box" textAlign='left'>
                 <div>
                  <span  className="hybrid-box-heading">
                    Guard Name : 
                  </span>
                  <span  className="hybrid-box-value">
                    Satish Caubey
                  </span>
                 </div>
                 <div>
                  <span  className="hybrid-box-heading">
                    Site : 
                  </span>
                  <span  className="hybrid-box-value">
                    111 George St, Sydney NSW
                  </span>
                 </div>
                 <div>
                  <span  className="hybrid-box-heading">
                    Role : 
                  </span>
                  <span  className="hybrid-box-value">
                    Roving Guard
                  </span>
                 </div>
                 <div>
                  <span  className="hybrid-box-heading">
                    Approver : 
                  </span>
                  <span  className="hybrid-box-value">
                    John Smith
                  </span>
                 </div>
                </Box>

              </Box>
            </Grid>
            
      </Grid>
    </Box>
  );
}



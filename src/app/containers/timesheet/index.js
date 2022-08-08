import React from "react";
import { Box, Link , Grid } from "@mui/material";
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
// import { blue } from '@mui/material/colors';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalDateSelector from "../../common/LocalDateSelector";


import "./style.css";

export default function TimesheetPage() {
  const users = [
    {
      id: 1,
      name : "John Smith",
      start : "27 Apr 2022",
      end : "27 Apr 2023",
      site : "111, ABC Street, Sydney",
      hours : 44,
      dateSubmitted : "27 Apr 2022",
      status : "Submitted",
      options : "Open"
    },
    {
        id: 1,
        name : "John Smith",
        start : "27 Apr 2022",
        end : "27 Apr 2023",
        site : "111, ABC Street, Sydney",
        hours : 44,
        dateSubmitted : "27 Apr 2022",
        status : "Submitted",
        options : "View"
      },
      {
        id: 1,
        name : "John Smith",
        start : "27 Apr 2022",
        end : "27 Apr 2023",
        site : "111, ABC Street, Sydney",
        hours : 44,
        dateSubmitted : "27 Apr 2022",
        status : "Submitted",
        options : "Open"
      },
      {
        id: 1,
        name : "John Smith",
        start : "27 Apr 2022",
        end : "27 Apr 2023",
        site : "111, ABC Street, Sydney",
        hours : 44,
        dateSubmitted : "27 Apr 2022",
        status : "Submitted",
        options : "Open"
      },
      {
        id: 1,
        name : "John Smith",
        start : "27 Apr 2022",
        end : "27 Apr 2023",
        site : "111, ABC Street, Sydney",
        hours : 44,
        dateSubmitted : "27 Apr 2022",
        status : "Submitted",
        options : "Open"
      },
      {
        id: 1,
        name : "John Smith",
        start : "27 Apr 2022",
        end : "27 Apr 2023",
        site : "111, ABC Street, Sydney",
        hours : 44,
        dateSubmitted : "27 Apr 2022",
        status : "Submitted",
        options : "View"
      },
      {
        id: 1,
        name : "John Smith",
        start : "27 Apr 2022",
        end : "27 Apr 2023",
        site : "111, ABC Street, Sydney",
        hours : 44,
        dateSubmitted : "27 Apr 2022",
        status : "Submitted",
        options : "Open"
      },
      {
        id: 1,
        name : "John Smith",
        start : "27 Apr 2022",
        end : "27 Apr 2023",
        site : "111, ABC Street, Sydney",
        hours : 44,
        dateSubmitted : "27 Apr 2022",
        status : "Submitted",
        options : "Open"
      },
      {
        id: 1,
        name : "John Smith",
        start : "27 Apr 2022",
        end : "27 Apr 2023",
        site : "111, ABC Street, Sydney",
        hours : 44,
        dateSubmitted : "27 Apr 2022",
        status : "Submitted",
        options : "Open"
      },
      {
        id: 1,
        name : "John Smith",
        start : "27 Apr 2022",
        end : "27 Apr 2023",
        site : "111, ABC Street, Sydney",
        hours : 44,
        dateSubmitted : "27 Apr 2022",
        status : "Submitted",
        options : "Open"
      },
  ];
  const sites = [
    {id : 1, name : '111,ABC Street,Sydney'},
    {id : 2, name : '112,ABC Street,Sydney'},
    {id : 3, name : '113,ABC Street,Sydney'},
    {id : 4, name : '114,ABC Street,Sydney'},
    {id : 5, name : '115,ABC Street,Sydney'},
  ]

  const guards = [
    {id : 1, name : 'Pan Singh Tomar'},
    {id : 2, name : 'Rajiv Kumar'},
    {id : 3, name : 'Santosh Rastogi'},
    {id : 4, name : 'Brijesh Pandey'},
    {id : 5, name : 'Atul Bihari'},
  ]

  const statuses = [
    {id : 1, name : 'Submitted'},
    {id : 2, name : 'Approved'},
  ]

  const [selectedSite, setSelectedSite] = React.useState('');
  const [selectedGuard, setSelectedGuard] = React.useState('');
  const [selectedStatus, setSelectedStatus] = React.useState('');
//   const [selectedDate, setSelectedDate] = React.useState(new Date())

  const changeSite = (event: SelectChangeEvent) => {
    setSelectedSite(event.target.value);
  };

  const changeGuard = (event: SelectChangeEvent) => {
    setSelectedGuard(event.target.value);
  };


  const changeStatus = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };

  const handleChangePage = () => {

  }

  const handleChangeRowsPerPage = () =>{

  }

  const TablePaginationActions = () => {

  }

//   const changeDate = (event: SelectChangeEvent) => {
//     setSelectedDate(event.target.value);
//   };
  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="Timesheets"  />
      <Grid container  className="sort-box" sx={{mx : "0.4rem",mt: "5rem", pr : "2rem"}} >
            <Grid item xs={3}>
            <FormControl sx={{ m: 1, width : "90%" }}>
                <Select
                    value={selectedSite}
                    onChange={changeSite}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={{borderRadius : 10, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderColor : "#707070"}}
                    // IconComponent={() => (
                    //     <KeyboardArrowDownIcon />
                    // )}
                    >
                    <MenuItem value="">
                    <div className="select-item">Select City</div>
                    </MenuItem>
                    {
                        sites.map((item, index) => (
                            <MenuItem value={item.id} key={index}>{item.name}</MenuItem>
                        ))
                    }
                </Select>
                {/* <FormHelperText>Without label</FormHelperText> */}
            </FormControl>
            </Grid>
            <Grid item xs={3}>
            <FormControl sx={{ m: 1, width : "90%" }}>
                <Select
                    value={selectedGuard}
                    onChange={changeGuard}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={{borderRadius : 10, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderColor : "#707070"}}
                    >
                    <MenuItem value="">
                    <div className="select-item">Select Guard</div>
                    </MenuItem>
                    {
                        guards.map((item, index) => (
                            <MenuItem value={item.id} key={index}>{item.name}</MenuItem>
                        ))
                    }
                </Select>
                {/* <FormHelperText>Without label</FormHelperText> */}
            </FormControl>
            </Grid>
            <Grid item xs={3}>
                <FormControl sx={{ m: 1, width : "90%" }}>
                        
                        <LocalDateSelector label="none"/>
                    
                </FormControl>
            </Grid>
            <Grid item xs={3}>
                <FormControl sx={{ m: 1, width : "90%" }}>
                    <Select
                        value={selectedStatus}
                        onChange={changeStatus}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{borderRadius : 10, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderColor : "#707070"}}
                        
                        >
                        <MenuItem value="" className="select-item">
                            <div className="select-item">Approval Status</div>
                        </MenuItem>
                        {
                            statuses.map((item, index) => (
                                <MenuItem value={item.id} key={index} className="select-item">{item.name}</MenuItem>
                            ))
                        }
                    </Select>
                    {/* <FormHelperText>Without label</FormHelperText> */}
                </FormControl>
            </Grid>
      </Grid>
      <Box display="flex" sx={{ my: "2rem" }}>
        <TableContainer component={Paper} sx={{ mx: "0.8rem" }} >
          <div style={{width: 'auto', overflowX: 'scroll'}}>
            <Table sx={{ minWidth: 'auto' }} aria-label="custom pagination table" className="responsive-table">
                <TableHead >
                    <TableRow className="table-header">
                        <TableCell align="left" component="th" className="t-cell" style={{width : "13%"}}>Guard Name</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Week Starting</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Week Ending</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Site Name</TableCell>
                        <TableCell align="left" component="th" className="t-cell" tyle={{width : "8%"}}>Hours Worked</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Date Submitted</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Status</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.name}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.start}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.end}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell" style={{width : "20%"}}>
                                    {item.site}
                                </TableCell>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.hours}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.dateSubmitted}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.status}
                                </TableCell>
                                <TableCell  align="center" className="t-body-cell">
                                <Link href="#" underline="always" className="file-class">
                                    {item.options}
                                </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                <TableRow>
                    {/* <TableCell className="t-body-cell" direction="column" justifycontent="center" colSpan={2}>
                      <Link href="#" underline="none" >
                         <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between'

                        }}>
                            
                            <span className="add-title">Add Guard</span>
                            <AddCircleIcon className="add-icon" fontSize="large"/>
                        </div>  
                      </Link>
                    </TableCell> */}
                    <TablePagination
                    align="right"
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={7}
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
            </div>
        </TableContainer>

      </Box>
    </Box>
  );
}



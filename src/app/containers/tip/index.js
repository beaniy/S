import React from "react";
import { Box, Link  } from "@mui/material";
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
import AddCircleIcon from '@mui/icons-material/AddCircle';

import "./style.css";

export default function TipPage() {
  const users = [
    {
      id: 1,
      title: "Tip 1",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

  ];
  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="Safety Tips"  />
      <Box display="flex" sx={{ my: "3rem" }}>
        <TableContainer component={Paper} sx={{ mx: "0.8rem" }} >
          {/* <div style={{width: 'auto', overflowX: 'scroll'}}> */}
            <Table sx={{ minWidth: 'auto' }} aria-label="custom pagination table" className="responsive-table">
                <TableHead >
                    <TableRow className="table-header">
                        <TableCell align="left" component="th" className="t-cell">Title</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Description</TableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.title}
                                </TableCell>
                                <TableCell align="left" className="t-body-cell">
                                    {item.description}
                                </TableCell>
                               
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                <TableRow>
                    <TableCell className="t-body-cell" direction="column" justifyContent="center">
                      <Link href="#" underline="none" >
                         {/* Add Guard <AddCircleOutlineIcon  className="add-icon"/> */}
                         <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between'

                        }}>
                            
                            <span className="add-title">Add Safety Tips</span>
                            <AddCircleIcon className="add-icon" fontSize="large"/>
                        </div>  
                      </Link>
                    </TableCell>
                    <TablePagination
                    align="right"
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={6}
                    count={users.length}
                    rowsPerPage={10}
                    page={1}
                    SelectProps={{
                        inputProps: {
                        'aria-label': 'rows per page',
                        },
                        native: true,
                    }}
                    // onPageChange={handleChangePage}
                    // onRowsPerPageChange={handleChangeRowsPerPage}
                    // ActionsComponent={TablePaginationActions}
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



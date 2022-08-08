import React,{useState} from "react";
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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



import "./style.css";

export default function SiteDocumentPage() {
  const [selectedOption, setSelectedOption] = useState(1)
  const documents = [
    {
      id: 1,
      category: "HSW & Compliance",
      type : "Introduction",
      desc : "Site Introduction",
      upload : "Attachment"
    },
    {
        id: 1,
        category: "HSW & Compliance",
        type : "Hazmat Register",
        desc : "Register",
        upload : "Attachment"
    },
    {
        id: 1,
        category: "HSW & Compliance",
        type : "Evacuation Plan",
        desc : "Register",
        upload : "Attachment"
    },
    {
        id: 1,
        category: "Operational",
        type : "Site Hazards",
        desc : "Register",
        upload : "Attachment"
    },
    {
        id: 1,
        category: "Operational",
        type : "Traffic Plan",
        desc : "Management Plan",
        upload : "Attachment"
    },
    {
        id: 1,
        category: "Operational",
        type : "Site Team",
        desc : "Team Structure",
        upload : "Attachment"
    },
    {
        id: 1,
        category: "Operational",
        type : "SOP",
        desc : "Site Operations",
        upload : "Attachment"
    },
    {
        id: 1,
        category: "General",
        type : "Privacy Policy",
        desc : "Policy",
        upload : "Attachment"
    }, 
  ];

  const changeOption = (event) => {
    setSelectedOption(event.target.value)
  }

  const options = [{id : 1, name : 'Yes'}, {id : 2, name : 'No'}];
  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="Site View"  subTitle="111, ABC Street, Sydney / Site Documents"/>
      <Box display="flex" sx={{ my: "4rem" }}>
        <TableContainer component={Paper} sx={{ mx: "0.8rem" }} >
          {/* <div style={{width: 'auto', overflowX: 'scroll'}}> */}
            <Table sx={{ minWidth: 'auto' }} aria-label="custom pagination table" className="responsive-table">
                <TableHead >
                    <TableRow className="table-header">
                        <TableCell align="left" component="th" className="t-cell">Category</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Document Type</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Description</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Upload File</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Accessible on App</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        documents.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell  align="left" className="t-body-cell">
                                  {item.category}
                                </TableCell>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.type}
                                </TableCell>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.desc}
                                </TableCell>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.upload}
                                </TableCell>
                                <TableCell  align="left" className="t-body-cell">
                                <FormControl sx={{ m: 0, p : 0, width : "70%" }}>
                                    <Select
                                        value={selectedOption}
                                        onChange={changeOption}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        style={{borderRadius : 10, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderColor : "#707070", padding : "0px 10px", height : 40, backgroundColor : 'white'}}
                                        >
                                       
                                      
                                        {
                                            options.map((item, index) => (
                                                <MenuItem value={item.id} key={index}>{item.name}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
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
                            <span className="add-title">Add Document</span>
                            <AddCircleIcon className="add-icon" fontSize="large" onClick={() => alert("You can Add New Entry")}/>
                        </div>  
                      </Link>
                    </TableCell>
                    <TableCell  align="left" className="t-body-cell">
                    </TableCell>
                    <TableCell  align="left" className="t-body-cell">
                    </TableCell>
                    <TableCell  align="left" className="t-body-cell">
                    </TableCell>
                    <TableCell  align="left" className="t-body-cell">
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



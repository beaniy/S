import React, {useState} from "react";
import { Box, Link, Button  } from "@mui/material";
import PageTitle from "../../../common/PageTitle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { TextField  } from '@mui/material'

import "./style.css";
const data = [
    {
      id: 1,
      role:  1,
      question : "Which floor did alarm trigger on?",
      choices : [
        {id : 1, name : 'Yes', checked : false},
        {id : 2, name : 'No', checked : false},
        {id : 3, name : 'NA', checked : false}
      ],
      note : "note 1"
    },
    {
        id: 2,
        role:  2,
        question : "Was there is a fire?",
        choices : [
          {id : 1, name : 'Yes', checked : false},
          {id : 2, name : 'No', checked : false},
          {id : 3, name : 'NA', checked : false}
        ],
        note : "note 2"
    },
    {
        id: 3,
        role:  3,
        question : "Was there a some / flame?",
        choices : [
          {id : 1, name : 'Yes', checked : false},
          {id : 2, name : 'No', checked : false},
          {id : 3, name : 'NA', checked : false}
        ],
        note : "note 1"
    },
    {
        id: 4,
        role:  4,
        question : "What was the cause of Alary activation?",
        choices : [
          {id : 1, name : 'Yes', checked : false},
          {id : 2, name : 'No', checked : false},
          {id : 3, name : 'NA', checked : false}
        ],
        note : "note 5"
    },
    {
        id: 5,
        role:  5,
        question : "Dis the floor / building go into evacuation mode?",
        choices : [
          {id : 1, name : 'Yes', checked : false},
          {id : 2, name : 'No', checked : false},
          {id : 3, name : 'NA', checked : false}
        ],
        note : "note 7"
    },
    {
        id: 6,
        role:  6,
        question : "Did all occupants evacuate?",
        choices : [
          {id : 1, name : 'Yes', checked : false},
          {id : 2, name : 'No', checked : false},
          {id : 3, name : 'NA', checked : false}
        ],
        note : "note 1"
    },
    {
        id: 7,
        role:  7,
        question : "Was evacuation procedure followed correctly ?",
        choices : [
          {id : 1, name : 'Yes', checked : false},
          {id : 2, name : 'No', checked : false},
          {id : 3, name : 'NA', checked : false}
        ],
        note : "note 1"
    },
    {
        id: 8,
        role:  8,
        question : "Did fire brigade arrive?",
        choices : [
          {id : 1, name : 'Yes', checked : false},
          {id : 2, name : 'No', checked : false},
          {id : 3, name : 'NA', checked : false}
        ],
        note : "note 1"
    }
  ];

export default function SiteFormPage() {
  const [documents, setDocuments] = useState(data)
  

  const changeOption = (docId,selectedId) => {
   
    // setDocuments(data)
    setDocuments(prevState => {
        const newState = prevState.map(obj => {
          if (obj.id === docId) {
            var arr = [];
         
            for(var i = 0; i < obj.choices.length ; i++){
                if(obj.choices[i].id === selectedId){
                    arr.push({id : selectedId, name : obj.choices[i].name, checked : true})
                }
                else{
                   arr.push({id : selectedId, name : obj.choices[i].name, checked : false})
                }
            }
            return {...obj, choices:  arr};
          }
          return obj;
        });
  
        return newState;
      });
  }


  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="Site View"  subTitle="111, ABC Street, Sydney / Site Inspection / Create Form" headerTitle="Fire Alarm Report"/>
      <Box display="flex" sx={{ my: "4rem" }}>
        <TableContainer component={Paper} sx={{ mx: "0.8rem" }} >
          {/* <div style={{width: 'auto', overflowX: 'scroll'}}> */}
            <Table sx={{ minWidth: 'auto' }} aria-label="custom pagination table" className="responsive-table">
                <TableHead >
                    <TableRow className="table-header">
                        <TableCell align="left" component="th" className="t-cell">Role</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Enter Question</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Choices</TableCell>
                        <TableCell align="left" component="th" className="t-cell">Notes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        documents.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell  align="left" className="t-body-cell">
                                  {item.role}
                                </TableCell>
                                <TableCell  align="left" className="t-body-cell">
                                    {item.question}
                                </TableCell>
                                <TableCell  align="left" className="t-body-cell" style={{width : '23%'}}>
                                    <div style={{display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-around'}}>
                                    {
                                        item.choices.map((opt, ind) => (
                                            <Button variant="outlined" onClick={() => changeOption(item.id, opt.id)} key={ind} displayEmpty className={opt.checked ? "opt-button-active" : "opt-button"} >{opt.name}</Button>
                                        ))
                                    }
                                    </div>
                                </TableCell>
                                <TableCell  align="left" className="t-body-cell">
                                   <TextField id="outlined-basic" label="Enter your Note" variant="outlined" size="small" />
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
                            <span className="add-title">Add</span>
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
                   
                </TableRow>
                </TableFooter>
            </Table>
            {/* </div> */}
        </TableContainer>

      </Box>
    </Box>
  );
}



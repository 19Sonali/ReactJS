import React, {useEffect, useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Employeedetail() {
    const [rows, setRows] = useState([]);
    useEffect (()=>{
        let data = localStorage.getItem("Users")
        setRows(JSON.parse(data) || [])
    }, [])

    const [open, setOpen] = React.useState(false);
const [deleteId, setDeleteId] = useState(" ")
const handleOpen = (index) => {
  setDeleteId(index)
  setOpen(true);
}
const handleClose = () => setOpen(false);

const Delete  = () => {
  let newData = rows.filter((item, index)=>{
      return index!= deleteId
  })
  setRows(newData)
  localStorage.setItem("Users", JSON.stringify(newData))
  handleClose()
}

  return (
     
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontSize: "20px", fontFamily: "times, bold", backgroundColor: "skyblue"}}>Sl No</TableCell>
            <TableCell sx={{fontSize: "20px", fontFamily: "times, bold", backgroundColor: "skyblue"}} align="right">User Id</TableCell>
            <TableCell sx={{fontSize: "20px", fontFamily: "times, bold", backgroundColor: "skyblue"}} align="right">Name</TableCell>
            <TableCell sx={{fontSize: "20px", fontFamily: "times, bold", backgroundColor: "skyblue"}} align="right">Phone no</TableCell>
            <TableCell sx={{fontSize: "20px", fontFamily: "times, bold", backgroundColor: "skyblue"}} align="right">Email</TableCell>
            <TableCell sx={{fontSize: "20px", fontFamily: "times, bold", backgroundColor: "skyblue"}} align="right">Salary</TableCell>
            <TableCell sx={{fontSize: "20px", fontFamily: "times, bold", backgroundColor: "skyblue"}} align="right">Edit</TableCell>
            <TableCell sx={{fontSize: "20px", fontFamily: "times, bold", backgroundColor: "skyblue"}} align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {++index}
              </TableCell>
              <TableCell align="right">{row.userId}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell align="right"> <Link to={`/Edit1/${--index}`}><Button variant="contained">Edit</Button></Link></TableCell>
              <TableCell align="right"> <Button variant="outlined"onClick={()=>handleOpen(index)}>
                Delete
                </Button></TableCell>            
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      <Link to="/Task"><Button color='success' variant="contained" to="/Task" >Insert</Button></Link> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete?
          </Typography>
          <Button sx={{margin: "20px"}} color='error' variant="contained" onClick={Delete} >Yes</Button>
          <Button color='success' variant="contained" onClick={handleClose}>No</Button>
        </Box>
      </Modal>
    </TableContainer>
    
  );
}
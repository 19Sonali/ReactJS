import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link, useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];




export default function BasicTable() {

    const [rows, setRows] = useState([])

useEffect (()=>{
    // to get data from local storage
    let data= localStorage.getItem("Users")
    // parse-to convert data to original form
    setRows(JSON.parse(data) || [])
}, [])
console.log(rows)

// for modals ie to display dialogue box
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

// style for modal
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

const nav = useNavigate()
// nav("/LocalStorage")

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl No</TableCell>
            <TableCell align="right">User Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {++index}
              </TableCell>
              <TableCell align="right">{row.user_id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"><Link to={`/edit/${--index}`}>
                 <Button color='success' variant="contained">Edit</Button>
                 </Link></TableCell>
              <TableCell align="right"><Link> 
              <Button color='error' variant="outlined" onClick={()=>handleOpen(index)}>Delete</Button>
              </Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
      <Link to="/LocalStorage"><Button color='error' variant="outlined" to="/LocalStorage">Insert</Button></Link> 
      {/* modal ie to give dialogue box*/}
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
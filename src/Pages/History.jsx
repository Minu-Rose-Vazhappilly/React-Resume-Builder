import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <div className=''>
          <h1 className='text-center my-5'>Resume Downloaded History</h1>
          <span><Link to={'/'} style={{marginTop:"-80px"}} className='float-end me-5'>BACK</Link></span>
      </div>
      <Box component="section" className='container-fluid'>
      <div className='row'>
        <div className='col-md-4'>
          <Paper sx={{ my:5,p:5,textAlign:'center'}}>
            <div className='d-flex align-items-center justify-content-evenly'>
              <h6>Review at: <br />24/06/2025,7:22:27 pm</h6>
              <button className='btn '><MdDelete /></button>
            </div>
            <div className='border rounded p-3'>
              <h2>Name</h2>
              <h4>Job Title</h4>
              <p><span>Location</span> | <span>Email</span> | <span>Phone</span></p>
              <p>
                  <Link href={""}>GITHUB </Link> |
                  <Link href={""}> LINKEDIN </Link> |
                  <Link href={""}> PORTFOLIO</Link>
              </p>
              <Divider sx={{fontSize:"25px"}}>Summary</Divider>
              <p className='fs-5 text-start'>user summary</p>
              <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Education</Divider>
              <h5>User Education</h5>
              <p><span>College</span> | <span>University</span> | <span>Year</span></p>
              
              <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Professional Experience</Divider>
              <h5>User Job</h5>
              <p><span>Comapny</span> | <span>Location</span> | <span>Duration</span></p>
              
              <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Skills</Divider>
              <Stack justifyContent={'space-evenly'} spacing={2} direction="row" sx={{flexWrap:'wrap',gap:'10px'}}>
            
            <Button variant="contained">User skill</Button>
            
          </Stack>
            </div>
          </Paper>
        </div>
      </div>
    </Box>
    </div>
  )
}

export default History
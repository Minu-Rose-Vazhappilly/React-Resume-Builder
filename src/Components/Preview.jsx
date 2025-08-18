import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';




function Preview() {
  return (
    <div >
      <Stack direction={'row'} sx={{marginTop:'20px',justifyContent:'flex-end'}}>
        <Stack direction={'row'} sx={{alignItems:'center'}}>
          {/* Download */}
          <button className='btn fs-1 text-primary' ><FaFileDownload /></button>
          {/* edit */}
          <div>
            <Edit/>
          </div>
          {/* history */}
          <Link to={'/history'}><button className='btn fs-1 text-primary' ><FaHistory /></button></Link>
          <Link to={'/resume'}><button className='btn fs-1 text-primary' >BACK</button></Link>
        </Stack>
      </Stack>
      <Box component="section">
      
      <Paper sx={{ my:5,p:5,textAlign:'center'}}>
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
      </Paper>
    </Box></div>
  )
}

export default Preview
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Box sx={{ flexGrow: 1,marginBottom:"70px"}}>
      <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://www.freeiconspng.com/uploads/resume-icon-png-5.png" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:"Poetsen One" }}>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
          <Button color="inherit"><Tooltip title='A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews.'>ABOUT US</Tooltip></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
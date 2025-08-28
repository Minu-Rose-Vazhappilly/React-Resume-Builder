import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';

function History() {
  const [resume,setResume] = React.useState([])
  useEffect(()=>{
    getHistory()
  },[resume])
  const getHistory = async()=>{
    try{
        const result = await getHistoryAPI() 
        console.log(result);
        setResume(result.data)
    }catch(err){
      console.log(err);
      
    }         
  }
  console.log(resume);

  const handleRemoveHistory = async (id)=>{
    try{
        await deleteHistoryAPI(id)
        getHistory()
    }catch(err){
      console.log(err);
      
    }
  }
  
  return (
    <div>
      <div className=''>
          <h1 className='text-center my-5'>Resume Downloaded History</h1>
          <span><Link to={'/'} style={{marginTop:"-80px"}} className='float-end me-5'>BACK</Link></span>
      </div>
      <Box component="section" className='container-fluid'>
      <div className='row'>
        
        {
          resume.length>0?
          resume?.map((item,index)=>(
            <div key={index} className='col-md-4'>
          <Paper sx={{ my:5,p:5,textAlign:'center'}}>
            <div className='d-flex align-items-center justify-content-evenly'>
              <h6>Review at: <br />{item?.timeStamp}</h6>
              <button onClick={()=>handleRemoveHistory(item?.id)} className='btn '><MdDelete /></button>
            </div>
            <div className='border rounded p-3'>
              <img className="img-fluid" src={item?.imgURL} alt="resume" />
            </div>
          </Paper>
        </div>
          ))
          :
          <p>History is empty</p>
        }
      </div>
    </Box>
    </div>
  )
}

export default History
import React from 'react'
import Steps from '../Components/Steps'
import Preview from '../Components/Preview'

function UserForm() {
  const [userInput,setUserInput] = React.useState({
      personelData:{
        name:'',
        jobTitle:'',
        location:'',
        email:'',
        phone:'',
        github:'',
        linkedin:'',
        portfolio:''
      },
      education:{
        course:'',
        college:'',
        university:'',
        year:''
      },
      experience:{
        jobRole:'',
        company:'',
        jobLocation:'',
        duration:''
      },
      skills:[],
      summary:''
  
    });
  return (
    <div>
      <div className="container">
        <div className="row p-5">
          <div className="col-6">
            <Steps userInput={userInput} setUserInput={setUserInput}/>
          </div>
          <div className="col-6 ">
            <Preview userInput={userInput}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserForm
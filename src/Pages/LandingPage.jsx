import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <section id="para1" style={{width:"100%",overflowX:'hidden',height:'450px',backgroundImage:"url(https://assets.entrepreneur.com/content/3x2/2000/20150408131026-correcting-leadership-communication-mishaps-co-workers-talking-workplace.jpeg)",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}}>
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 box border py-5 rounded mt-5 text-center" style={{backgroundColor:"rgb(255,255,255,0.4)"}}>
              <h3>Designed to get hired</h3>
              <h4>Your skills,your story,your next job - all in one</h4>
              <Link to={'/resume'}>
              <button className='btn btn-primary'>Make Your Resume</button>
              </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
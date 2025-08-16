import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
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

      <section className="tools">
        <h1 className='text-center'>Tools</h1>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='tool-content col-12 col-md-6'>
              <h4>Resume</h4>
              <p>Create unlimited new resumes and easily edit them afterwards</p>

              <h4>Cover letter</h4>
              <p>Easily write professional cover letters</p>

              <h4>Jobs</h4>
              <p>Automatically receive new and relevant job openings</p>

              <h4>Applications</h4>
              <p>Effortlessly manage and track your job applications in an organization manner</p>
            </div>
            <div className='tool-image col-12 col-md-6'>
              <img src="https://i.pinimg.com/originals/e4/98/ec/e498ec41056fb80796350642df7e33a0.jpg" alt="" height={"500px"}  width={"600px"}/>
            </div>
          </div>
        </div>
      </section>

      <section id="para1" style={{width:"100%",overflowX:'hidden',height:'450px',backgroundImage:"url(https://professional.dce.harvard.edu/wp-content/uploads/sites/9/2015/11/great-workplace-communication.jpg)",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}}>
      </section>

      <section className="tools">
        <h1 className='text-center'>Testimony</h1>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='tool-content col-12 col-md-6'>
              <h1>Trusted by professional world wide</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum similique, cumque aliquid officiis hic blanditiis placeat eveniet nam, dolor qui earum quis eius voluptas, fugit nihil porro voluptate nulla cum.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa ex laudantium veniam molestias fugiat error dignissimos exercitationem ab expedita velit, possimus dolore perspiciatis fuga. Dolor eligendi aliquid tempore consectetur!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sapiente natus, consectetur provident ipsa expedita illum in ad sequi laborum perspiciatis incidunt quasi exercitationem enim fugit autem. Magni, atque eveniet?</p>
            </div>
            <div className='tool-image col-12 col-md-6'>
              <div className='row'>
                <div className="col-3">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa?pid=Api&P=0&h=180" alt="" width={"150px"} height={"200px"}/>
                </div>
                <div className="col-3">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.7KRrlK9AxS12qJc6O7ja3AHaE8?pid=Api&P=0&h=180" alt="" width={"150px"} height={"200px"} />
                </div>
                <div className="col-3">
                  <img src="https://visafoto.com/img/passport-photo-original7.jpg" alt="" width={"150px"} height={"200px"}/>
                </div>
                <div className="col-3">
                  <img src="https://tse2.mm.bing.net/th/id/OIP.mzgnWb1Th9fRhsSEiZb3FwHaHa?pid=Api&P=0&h=180" alt="" width={"150px"} height={"200px"} />
                </div>
                <div className="col-3">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa?pid=Api&P=0&h=180" alt="" width={"150px"} height={"200px"}/>
                </div>
                <div className="col-3">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.7KRrlK9AxS12qJc6O7ja3AHaE8?pid=Api&P=0&h=180" alt="" width={"150px"} height={"200px"} />
                </div>
                <div className="col-3">
                  <img src="https://visafoto.com/img/passport-photo-original7.jpg" alt="" width={"150px"} height={"200px"}/>
                </div>
                <div className="col-3">
                  <img src="https://tse2.mm.bing.net/th/id/OIP.mzgnWb1Th9fRhsSEiZb3FwHaHa?pid=Api&P=0&h=180" alt="" width={"150px"} height={"200px"} />
                </div>
                <div className="col-3">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa?pid=Api&P=0&h=180" alt="" width={"150px"} height={"200px"}/>
                </div>
                <div className="col-3">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.7KRrlK9AxS12qJc6O7ja3AHaE8?pid=Api&P=0&h=180" alt="" width={"150px"} height={"200px"} />
                </div>
                <div className="col-3">
                  <img src="https://visafoto.com/img/passport-photo-original7.jpg" alt="" width={"150px"} height={"200px"}/>
                </div>
                <div className="col-3">
                  <img src="https://tse2.mm.bing.net/th/id/OIP.mzgnWb1Th9fRhsSEiZb3FwHaHa?pid=Api&P=0&h=180" alt="" width={"150px"} height={"200px"} />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    
  )
}

export default LandingPage
import React from 'react';
import './HealthProfessionals.css';
import psimg from '../images/WhatsApp Image 2022-11-12 at 7.18.34 PM.jpeg'
import saheliimg from '../images/pngwing.com (35).png'
import menst from '../images/pngwing.com (36).png'
import blog from '../images/pngwing.com (37).png'
import test from '../images/pngwing.com (38).png'
import { Link } from 'react-router-dom'
import { Fade, Slide, Zoom } from "react-awesome-reveal";
function HealthProfessionals() {

  var stobj = {
    color: "red",
    fontWeight: "bold",
    fontSize: "40px"
  }
  return (
    <>
    {/* <img src={psimg} alt="" style={{display:"block",margin:'auto',width:'900px',marginTop:"50px",marginBottom:'50px'}} /> */}
    <div className="container">
      <Fade delay={100}>

    <div style={{display:"flex",justifyContent:'space-around',marginBottom:"40px"}}>
          <div>
            <img src={saheliimg} alt="" style={{width: "299px"}} />
          </div>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:'650px'}}>
            <h2>In Trouble? No Problem !! <span style={stobj}> Saheli</span> is here</h2>
            <ul>
              <li>Online Platform</li>
              <li>Connect With Saheli</li>
              <li>Talk Freely</li>
              <li>No charge, just to help out womens to get aware of their health</li>
              <li>Initiative by team KING</li>
            </ul>
            <Zoom>

            <Link to='/room'><button className='btn btn-primary' style={{marginTop:'20px'}}>Get Connect</button></Link>
            </Zoom>
          </div>
        </div>
      </Fade>

      <Fade delay={100}>

      <div style={{display:"flex",justifyContent:'space-around',marginBottom:"40px"}}>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:'650px'}}>
            <h2>Keep Track Of Your Periods With <span style={stobj}> Shakti Tracker</span>
            </h2>
           <p>
           If menstrual health and hygiene (MHH) is well managed from the start,<br /> it has a surprisingly high potential to contribute to increasing <br /> female empowerment at a critical stage of a girls’ life.
           </p>
           <Zoom>

            <Link to='/periods'><button className='btn btn-primary' style={{marginTop:'20px'}}>Track Now</button></Link>
           </Zoom>
          </div>
          <div>
            <img src={menst} alt="" style={{width: "299px"}} />
          </div>
        </div>
      </Fade>

      <Fade delay={100}>

      <div style={{display:"flex",justifyContent:'space-around',marginBottom:"40px"}}>
          <div>
            <img src={blog} alt="" style={{width: "299px"}} />
          </div>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:'650px'}}>
            <h2>Get Yourself Updated Through Health Blogs <span style={stobj}> WeBlogs</span>
            </h2>
           <p>
           Women’s health is about empowering women to live a life that is mentally, emotionally and physically healthy. There are many ways to achieve a healthy lifestyle and many practices that one can adopt to achieve their own version of healthy. Some of these practices might include exercise, healthy eating, mindfulness, proper health care, disease prevention, self-love, and more!
           </p>
           <Zoom>

            <Link to='/blogs'><button className='btn btn-primary' style={{marginTop:'20px'}}>Explore Now</button></Link>
           </Zoom>
          </div>
        </div>

      </Fade>


      <Fade delay={100}>

      <div style={{display:"flex",justifyContent:'space-around',marginBottom:"40px"}}>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:'650px'}}>
            <h2>Feeling Lazy ?? No Problem!!<span style={stobj}> Do PCOS </span> prediction test at home
            </h2>
           <p>
           Polycystic ovary syndrome (PCOS) is a condition in which the ovaries produce an abnormal amount of androgens, male sex hormones that are usually present in women in small amounts. The name polycystic ovary syndrome describes the numerous small cysts (fluid-filled sacs) that form in the ovaries.
           </p>
           <Zoom>

            <a href='https://healthynaari.herokuapp.com/'><button className='btn btn-primary' style={{marginTop:'20px'}}>Test Now</button></a>
           </Zoom>
          </div>
          <div>
            <img src={test} alt="" style={{width: "299px"}} />
          </div>
        </div>
      </Fade>
    </div>
    <img src={psimg} alt="" style={{display:"block",margin:'auto',width:'900px',marginTop:"50px",marginBottom:'50px'}} />

    </>  
  )
}

export default HealthProfessionals;
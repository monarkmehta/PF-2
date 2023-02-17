import React from 'react'
// import crimg from '../images/Illustration.png'
import '../crousel.css'
import { Zoom} from "react-awesome-reveal";
import { Link } from 'react-router-dom'
export default function Crousel() {
    const goToLinkedIn= ()=>{
        window.location.href = 'https://www.linkedin.com/in/saday-sadev-1b97511b2/?originalSubdomain=in';
    }
    const tweetBtn= ()=>{   
        window.location.href = 'https://twitter.com/sadaysadev';
    }
  return (
    <>
    <div className="crcontainer" style={{width:'100%', height:'500px'}}>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="carousel-itemtwo">

                    <div className="lbox" style={{width:'40%', height: '100%', overflow:'hidden', borderRadius:'40px',display:'flex', justifyContent:'center', alignItems:'center', backgroundImage:'Url("https://wallpaperaccess.com/full/270183.jpg")', flexDirection:'column'}}>
                        <Zoom>

                            <img src="https://raahee.in/static/media/RaaheeLogo.46bb0c1e.png" alt="" style={{width:'100px'}}/>
                        </Zoom>
                        <h1 style={{color:'white'}} className="inboxname">GUDIA</h1>
                        <h3 style={{color:'yellow'}}>(Age 1 to 18)</h3>
                    </div>

                    <div className="btnbox">
                        <div style={{width:'78%'}}>
                            <h3>Talk with your doctor to find out what preventive services are right for your children and when they should have them. Routine childhood and adolescent vaccines should be completed by this age. A catch-up vaccine schedule
</h3>
                        </div>
                        <Link to='/ward'><button className='btn btn-primary'>Let's Explore</button></Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-itemtwo">

                    <div className="lbox" style={{width:'40%', height: '100%', overflow:'hidden', borderRadius:'40px',display:'flex', justifyContent:'center', alignItems:'center', backgroundImage:'Url("https://wallpaperaccess.com/full/270183.jpg")', flexDirection:'column'}}>
                    <Zoom>
                        <img src="https://raahee.in/static/media/RaaheeLogo.46bb0c1e.png" alt="" style={{width:'100px'}}/>
                    </Zoom>
                        <h1 style={{color:'white'}} className="inboxname">NAARI</h1>
                        <h3 style={{color:'yellow'}}>(Age 19 to 29)</h3>
                    </div>

                    <div className="btnbox">
                        <div style={{width:'78%'}}>
                            <h3>It's easy to get distracted from a healthy lifestyle as work and family responsibilities become more time consuming. If you have gained weight or if your blood pressure, cholesterol or blood sugar is high, work with your doctor to develop a plan of action.</h3>
                        </div>
                        <Link to='/ward'><button className='btn btn-primary'>Let's Explore</button></Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-itemtwo">

                    <div className="lbox" style={{width:'40%', height: '100%', overflow:'hidden', borderRadius:'40px',display:'flex', justifyContent:'center', alignItems:'center', backgroundImage:'Url("https://wallpaperaccess.com/full/270183.jpg")', flexDirection:'column'}}>
                        
                    <Zoom>
                        <img src="https://raahee.in/static/media/RaaheeLogo.46bb0c1e.png" alt="" style={{width:'100px'}}/>
                    </Zoom>

                        <h1 style={{color:'white'}} className="inboxname">MAHILA</h1>
                        <h3 style={{color:'yellow'}}>(Age 30 and above)</h3>

                    </div>

                    <div className="btnbox">
                        <div style={{width:'78%'}}>
                            <h3>Maintaining healthy eating habits and a regular exercise regimen is very important as your reproductive life shifts from a focus on the ability to become pregnant to menopause. Other conditions — diabetes, high cholesterol, high blood pressure, breast cancer and heart disease — are concerns for women in your age group as weight gain becomes more difficult to control.</h3>
                        </div>
                        <Link to='/ward'><button className='btn btn-primary'>Let's Explore</button></Link>
                    </div>
                </div>
            </div>
      
            {/* <div className="carousel-item">
            <img className="d-block w-100" src='...' alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src='...' alt="Third slide"/>
            </div> */}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
    </div>
    </>
  )
}

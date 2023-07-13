import React from "react";
import { useNavigate } from "react-router-dom";
import {BsFacebook,BsInstagram,BsTwitter,BsFillEnvelopeCheckFill} from "react-icons/bs"

function HomePage(){

    const navigate = useNavigate()

    return (
    <>
<nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
    <a className="navbar-brand" href="">Dehru Earth Movers</a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
   <ul className="navbar-nav ml-auto">
       <li className="nav-item">
           {/* <!--<a className="nav-link" href="">Contact</a>--> */}
           <div className="dropdown">
 <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Contact
 </button>
 <ul className="dropdown-menu">
   <li><a className="dropdown-item" href="/">Address</a></li>
   <li><a className="dropdown-item" href="/">Phone Number</a></li>
   <li><a className="dropdown-item" href="/">E-mail</a></li>
 </ul>
</div>
       </li>
         <li className="nav-item">
           <a className="nav-link" href="#pricing-column">Pricing</a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#carousel-inner">Transport Avilable</a>
    </li>
         <li className="nav-item">
           <a className="nav-link" href="#about-section">About Us</a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#btn">Download</a>
        </li>
        <li className="nav-item">
          <p className="nav-link" onClick={()=>navigate("/login")} >Login</p>
          </li>
   </ul>
   </div> 
</nav>





    <section id="title">
 
        <div className="container-fluid">
     
          <div  className="card">
            <div className="icon" id="card_icon">
          
              <div className="jcb_icon">
                <i className='fa fab fa-cc-jcb' style={{fontSize:"36px"}}></i>
                <h5 style={{color: "black"}}><b>Book</b></h5>
              </div>
            </div>
            <hr/>
           <div id="card_h2"> <h2 style={{color: "black",textAlign: "center",marginBottom: "15px"}}><b>Request a Service now</b></h2></div>
            
          <div className="card_place"><input type="text" placeholder="Enter the pickup Location"/></div>  
            <div className="card_place"><input type="text" placeholder="Enter Destination"/> </div>

            <div className="card_btn">
              {/* <!-- <button className="fr">Request Now</button>
              <button >Schedule For Later</button> --> */}
              <button type="button" className="btn btn-dark btn-lg download-button card_btn">Request Now</button>
              <button type="button" className="btn  btn-lg download-button card_btn">Schedule For Later</button>
            </div>
           </div>
       {/* <!-- <div className="row">
        <div className="col-lg-6">
             <div id="first">
                <h1 id="online_text">Online Booking Made Easy</h1>
                <button type="button" className="btn btn-lg download-button"><i className="fa fa-share-alt" style="font-size:24px"></i>  Download</button>
                <button type="button" className="btn btn-dark btn-lg download-button"> <i className="fa fa-apple" style="font-size:24px ; color: white;"></i>  Download</button>
               
               </div> 
       </div>
       <div className="col-lg-6 jcb1">
        <div>
            <img className="jcb" src="images/jcb.jpg" alt="jcb_pic">
           </div> 
       </div>
    </div> --> */}
      
</div>
    </section>
    <section id="features">
        <div className="row">
            <div className="features-box col-lg-4">
                <i className="fa fa-check-circle  f icon" style={{fontSize:"48px",color:"#ef8172",width: "50%"}}></i> 
                <h3> Easy to book.</h3>
                <p>Service avialable for 24 Hours</p>
            </div> 
            <div className="features-box col-lg-4">
                <i className="fa fa-wpexplorer icon f" style={{fontSize:"48px",color:"#ef8172",width: "50%"}}></i>
                <h3>Transport Avilable </h3>
                <p>We have JCB,Tractors,Truck,Car.</p>
                
            </div> 
            <div className="features-box col-lg-4">
                <i className="fa fa-heart  icon f" style={{fontSize:"48px",color:"#ef8172",width:"50%"}}></i>
                <h3>Guaranteed to work. </h3>
                <p>Work is done in specified period of time.</p>
            </div> 
        </div>
    </section>
    <section id="testimonials">

        <div id="testimonial-carousel" className="carousel slide" data-interval="1000" data-pause="hover" data-ride="false">
            <div className="carousel-inner" id="carousel-inner">
              <div className="carousel-item active">
              
                <h2>
                    All transportation source avilable here .
                </h2>
                <img id="small" className="slide-photo" src="images/truck_image.jpg" alt="truck_pic" style={{width:"200px" , height:"200px"}} />
                <em>Bhuna ,India</em>

              </div>
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-lg-6">
                  <div>
                    <h2 className="earth-movers slide-content pic_above_content" >
                      The Dehru Earth Movers you know, reimagined for business
                    </h2>
                  </div>
                      
                        
                        <img id="small"  className="slidephoto" src="images/PHOTO.jpg" alt="owner_pic" style={{width:"200px", height:"200px"}}/>
                    </div> 
                    <div className="col-lg-6 slide_info">
                      
                <em  className="earth-movers">A platform for managing global rides and meals, and local deliveries, for companies of any size.</em>
                        
                    </div> 
                    
                </div>
                
              </div> 
            </div>
            <a className="carousel-control-prev" href="/" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="/" data-bs-target="#testimonial-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
          </div>
        
        

        

    </section>

    <section id="press">  
         <img className="press-logo" id="small" src="images/car.jpg" alt="car_pic"/>
        
     <img  className="press-logo small_jcb" id="small" src="images/smalljcb.webp" alt="jcb_pic"/>
     <img className="press-logo" id="small" src="images/truck.jpg" alt="truck_pic"/>
     <img className="press-logo" id="small" src="images/arjun_tractor.png" alt="tractor_pic"/>
    </section>
    <section id="pricing">
     <h2> See Pricing of Earth Movers</h2>
     <p>Simple and affordable price plans for you.</p>
 
     <div className="row">

         <div className="col-lg-4 col-md-6 pricing-column"  id="pricing-column" >
            <div className="card" id="price_card">
                <div className="card-header">
                  <h2>For Only JCB</h2>
                </div>
                 <div className="card-body" id="price_card">
                   <h3>$400 / Hour</h3>
                   <p>Time will we consider only in integer .</p>
                   <p>To find total Hours floor value is taken .</p>
                   <p>Time will be considered will JCB starts for destination.</p>
                   <button className="btn btn-lg btn-block btn-outline-dark" type="button" >Sign Up</button>
                </div>
                
            </div>
         </div>
        
       <div className="col-lg-4 col-md-6 pricing-column">
            
          <div className="card" id="price_card">
             <div className="card-header">
               <h2>For only Soil</h2>
           </div>
            <div className="card-body" id="price_card">
           <h3>$200 / Tractor-Trolly.</h3>
           <p>Upto 5 KM no extra charges.</p>
           <p>After 5 KM 50$/KM extra charge will be added.</p>
           <button className="btn btn-lg btn-block btn-dark" type="button" >Sign Up</button>
        </div>
        
      </div>
   </div>
    
    <div className="col-lg-4 col-md-12  pricing-column">
        <div className="card" id="price_card"> 
            <div className="card-header">
              <h2>Both JCB and Tractor</h2>
            </div>
              <div className="card-body" id="price_card">
                <h3>$350 / Hour only for JCB.</h3>
                <h3>$100 / Hour Only for one Tractor.</h3>
                <p>Upto 5 KM no extra charges for Tractor.</p>
                <p>After 5 KM 50$/KM extra charge will be added.</p>
                <button className="btn btn-lg btn-block btn-dark" type="button" >Sign Up</button>
             </div>
             
         </div>
          </div> 
    </div>
    
    
        
     
    </section>


    <section id="cta">
    <div>
      <h1 className="cta-heading">Top Cities</h1>
    </div>
    <div className="row cities">
      <div className="col-lg-2 col-md-6 ">
        <p className="city_text_color">Delhi</p>
      </div>
      <div className="col-lg-2 col-md-6">
        <p className="city_text_color">Noida</p>
      </div>
      <div className="col-lg-2 col-md-6">
        <p className="city_text_color">Hisar</p>
      </div>
      <div className="col-lg-2 col-md-6">
        <p className="city_text_color">Mumbai</p>
      </div>
      <div className="col-lg-2 col-md-6">
        <p className="city_text_color">chennai</p>
      </div>
      <div className="col-lg-2 col-md-6">
        <p className="city_text_color">Ahmedabad</p>
      </div>
      <div className="col-lg-2 col-md-6">
        <p className="city_text_color">Bangalore</p>
      </div>
      <div className="col-lg-2 col-md-6">
        <p className="city_text_color">Pune</p>
      </div>
      <div className="col-lg-2 col-md-6">
        <p className="city_text_color">Hyderabad</p>
      </div>
      <div className="col-lg-2 col-md-6">
        <p className="city_text_color">Gurugram</p>
      </div>

    </div>
    <div className="ctn-button" id="btn">
    <button type="button" className="btn btn-lg download-button"><i className="fa fa-share-alt" ></i>  Download</button>
                <button type="button" className="btn btn-dark btn-lg download-button"> <i className="fa fa-apple"></i>  Download</button>
              </div>
     </section>
      
     <section id="info-us">
     <div className="row">

        <div className="col-lg-3 col-md-6 about-section" id="about-section">
           {/* <!-- <i className='far fa-address-card' style='font-size:36px'></i> --> */}
                   <h3>About us</h3>
                   <p>Find out how we started, what drives us, and how we are reimagining how the world moves.</p>
                  
                   <a className="about-section-link" href="/">Learn more about Us</a>
         </div>
         <div className="col-lg-3 col-md-6 about-section">
             {/* <!-- <i className='fas fa-clipboard-list' style='font-size:36px'></i> --> */}
             <h3>Newsroom</h3>
             <p>See announcements about our latest releases, initiatives, and partnerships.</p>
             
             <a className="about-section-link" href="/">Go to Newsroom</a>
        </div>
        <div className="col-lg-3 col-md-12 about-section">
             {/* <!-- <i className='fas fa-home' style='font-size:36px'></i> --> */}
               <h3>Global citizenship</h3>
              <p>Read about our commitment to making a positive impact in the cities we serve.</p>
             
              <a className="about-section-link" href="/">See our partnerships</a>
         </div>
     </div>
    </section>
    
 {/* <!--Footer--> */}
     <footer id="footer">
      <i className='social-icons'><BsFacebook/></i>
        <i className="social-icons" ><BsInstagram/></i>
        <i className='social-icons'><BsTwitter/></i>
        <i className='social-icons '><BsFillEnvelopeCheckFill/></i>   
      <p style={{color: "white"}}>&copy; Copyright 2023 Dehru Earth Movers</p>
     </footer>
     </>
    );
}

export default HomePage
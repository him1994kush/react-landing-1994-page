import React from 'react';
import logo from './logo.png';

function Footer() {
    return (
        <>
         <div className="container footer my-5">
             <div className="row">
                 <div className=" navbar text-center col-12 ">
                     <div className="row" id="links">
                         <div className="col-3">
                             <img src={logo} alt={logo} />
                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum obcaecati, sunt minus saepe dolor dolorem explicabo, aliquam in, accusantium suscipit repellendus. Itaque nobis fugit nam?</p>
                         </div>
                         <div className="col-3">
                             <h3>Links</h3>
                             <ul>
                                 <li><a href="/">Our Clients</a></li>
                                 <li><a href="/">Privacy Policy</a></li>
                                 <li><a href="/">Our Benifits</a></li>
                                 
                             </ul>
                         </div>
                         <div className="col-3">
                         <h3>Information</h3>
                             <ul>
                                 <li><a href="/">Our Clients</a></li>
                                 <li><a href="/">Privacy Policy</a></li>
                                 <li><a href="/">Our Benifits</a></li>
                                 
                             </ul>
                         </div>
                         <div className="col-3">
                         <h3>Contact Us</h3>
                             <ul>
                                 <li><a href="/">+91 8899548899</a></li>
                                 <li><a href="/">him1994kush@gmail.com</a></li>
                                 <li><a href="/">Noida, U.P.</a></li>
                                 
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </div>   
        </>
    )
}

export default Footer

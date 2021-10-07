import React from "react";
import logo from "./logo.png";


function Navbar() {
  return (
    <div className="sticky">
      <nav className="navbar navbar-expand-lg  bg-light  ">
        <div className="div">
          <img src={logo} alt="logo" />
        </div>
        <div className="container-fluid d-flex flex-row justify-content-end gap-5 ">
          <div className="col-md-6 " >
            
              <ul className="navbar-nav me-5 gap-5 mb-2 mb-lg-0 fw-bold">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
              </ul>
            
          </div>
          <div className="col-md-2 ">
            <form className="d-flex ">
              <button className="btn btn-primary rounded-pill " type="submit">
                Contact Us
              </button>
            </form>


          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from 'react';
import ps1 from "./ps1.jpg";
import ps2 from "./ps2.jpg";
import ps3 from "./ps3.jpg";
import ps4 from "./ps4.jpg";


function Products2() {
  return (
    <div className="container">
    <h1 className="text-center">Products</h1>
      <div id="carouselExampleControls-one" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="row">
                <div className="col-md-3">
                  <img src={ps1} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={ps2} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={ps3} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={ps4} className="d-block w-100" alt="..." />
                </div>
              </div>
      
    </div>
    <div className="carousel-item">
    <div className="row">
                <div className="col-md-3">
                  <img src={ps1} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={ps2} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={ps3} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={ps4} className="d-block w-100" alt="..." />
                </div>
              </div>
      
    </div>
    <div className="carousel-item">
    <div className="row">
                <div className="col-md-3">
                  <img src={ps1} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={ps2} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={ps3} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-3">
                  <img src={ps4} className="d-block w-100" alt="..." />
                </div>
              </div>
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-one" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-one" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Products2;

import React from "react";
import ps1 from "./ps1.jpg";
import ps2 from "./ps2.jpg";
import ps3 from "./ps3.jpg";
import ps4 from "./ps4.jpg";

function Services() {
  return (
    <div className="container my-3" id="service">
      <h1 className="text-center py-3">Services</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row gy-3">
              <div className="col-md-4">
                <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <img src={ps1} className="card-img-top" alt={ps1} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <img src={ps2} className="card-img-top" alt={ps1} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <img src={ps3} className="card-img-top" alt={ps1} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
              <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <img src={ps1} className="card-img-top" alt={ps1} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <img src={ps1} className="card-img-top" alt={ps1} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <img src={ps1} className="card-img-top" alt={ps1} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="row ">
              <div className="col-md-4">
              <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <img src={ps1} className="card-img-top" alt={ps1} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <img src={ps1} className="card-img-top" alt={ps1} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div
                  className="card"
                  style={{ width: "18rem", textAlign: "center" }}
                >
                  <img src={ps4} className="card-img-top" alt={ps1} />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Services;

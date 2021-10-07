import React from "react";

function About() {
  return (
    <>
      <div className="container-fluid about p-5 " id="about">
        <div className="row">
          <div className="col">
            <div className="row align-center">
              <div className="col-6 fw-lighter">
              <h1 className="mb-5 fw-lighter">Let's Discuss</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque saepe libero modi voluptates voluptatum accusamus eos
                  sint consectetur sunt repellat molestiae rem, qui consequatur
                  dolorem?
                </p>
              </div>
              <div className="col-6" >

                <form action="">
                  <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="emailBox"
                      />
                      <div className="input-group-append">
                        <button
                          id="button-addon1"
                          type="submit"
                          className="btn btn-primary rounded-pill"
                        >Sign Up</button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

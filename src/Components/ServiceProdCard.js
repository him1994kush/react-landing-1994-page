import React from 'react';
// import {NavLink} from 'react-router-dom';

function ServiceProdCard(props) {
    return (
        <>
        
            <div className="row">
              <div className="col-md-3">
                <div className="card" style={{ width: "18rem;" , textAlign: "center" }}>
                  <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
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



            
            
          
        </>
    )
}

export default ServiceProdCard;

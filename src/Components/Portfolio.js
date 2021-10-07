import React from 'react';
import PortCard from './PortCard';
import Sdata from './Sdata';

function Portfolio() {
    return (
        <div className="container my-5" id="portfolio">
        <h1 className="text-center py-3">Portfolio</h1>
            <div className="row">
            <div className="col-10 mx-auto">
                      <div className="row gy-4">

                          {
                              Sdata.map((val, ind)=>{
                              return <PortCard key={ind} 
                              imgsrc={val.imgsrc} 
                              title={val.title}

                              />
                          }).slice(0, 3)
                          }  

                      </div>
                  </div>
            </div>
        </div>
    )
}

export default Portfolio;

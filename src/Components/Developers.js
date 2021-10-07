import React from 'react';
import PortCard from './PortCard';
import Sdata from './Sdata';

function Developers() {
    return (
        <div className="container my-5">
        <h1 className="text-center py-3">Developers</h1>
            <div className="row">
            <div className="col-10 mx-auto">
                      <div className="row gy-4">

                          {
                              Sdata.map((value, index)=>{
                              return <PortCard key={index} 
                              imgsrc={value.imgsrc} 
                              title={value.title}

                              />
                          }).slice(0, 3)
                          }  

                      </div>
                  </div>
            </div>
        </div>
    )
}

export default Developers;

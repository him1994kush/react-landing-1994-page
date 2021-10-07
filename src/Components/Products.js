import React from 'react';
import Sdata from './Sdata';
import ExtraCard from './ExtraCard';

function Products() {
  return (
    <div className="container my-5">
    <h1>Products</h1>
       <div id="carouselExampleControls-three" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item ">
    {
                              Sdata.map((val, ind)=>{
                              return <ExtraCard key={ind} 
                              imgsrc={val.imgsrc} 
                              title={val.title}

                              />
                          })
                          }  
      
    </div>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item ">
    {
                              Sdata.map((val, ind)=>{
                              return <ExtraCard key={ind} 
                              imgsrc={val.imgsrc} 
                              title={val.title}

                              />
                          })
                          }  
      
    </div>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item ">
    {
                              Sdata.map((val, ind)=>{
                              return <ExtraCard key={ind} 
                              imgsrc={val.imgsrc} 
                              title={val.title}

                              />
                          })
                          }  
      
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls-three" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls-three" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
  )
}

export default Products;

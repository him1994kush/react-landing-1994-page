import React from 'react';
import banner from './banner.jpg';
import banner2 from './banner2.jpg';

function Banner() {
    return (
        <div className="container-fluid ">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
        </div>
    )
}

export default Banner

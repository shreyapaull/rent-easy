import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousell() {
  return (
    <div id="carouselExampleRide" className="carousel slide carousel-custom" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/imgc5.jpg" className="d-block w-100 " alt="img1" style={{ width: '1600px', height: '600px', objectFit: 'cover' }}/>
        </div>
        <div className="carousel-item">
          <img src="/imgc10.jpg" className="d-block w-100" alt="img 2" style={{width: '1600px', height:'600px',objectFit:'cover'}} />
        </div>
        <div className="carousel-item">
        <img src="/imgc9.jpg" className="d-block w-100" alt="img 2" style={{width: '1600px', height:'600px',objectFit:'cover'}} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousell;
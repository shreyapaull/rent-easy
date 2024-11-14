import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Carousell from './Carousell';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bike_card from './Bike_card';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Login';

function Home() {
  return (
    <div>
      <Carousell /> {/* Carousel for the home page */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-3 col-sm-4 bike-card-col">
            <Bike_card img={img1} name="bike name" desc="bike description" btn="Rent Now" />
          </div>
          <div className="col-12 col-md-3 col-sm-4 bike-card-col">
            <Bike_card img={img2} name="bike name" desc="bike description" btn="Rent Now" />
          </div>
          {/* Add other Bike_card components as needed */}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> {/* Navbar is outside Routes so it shows on every page */}
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route with Carousel and Bike cards */}
          <Route path="/login" element={<Login />} /> {/* Login route */}
          {/* You can add other routes for different pages here */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

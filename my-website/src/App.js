import React from 'react';
import Navbar from './Navbar';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '/workspace/react/my-website/src/Background.png';
import image2 from '/workspace/react/my-website/src/2.png';
import image3 from '/workspace/react/my-website/src/Mlprocess.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1><span className="first-letter"><i>S</i></span>WASA</h1>
        <h2 className="welcome-text">Welcome to our website,</h2>
      </div>
      <div className="carousel-container">
        <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false} showThumbs={false}>
          <div>
            <img src={image1} alt="Image 1" />
          </div>
          <div>
            <img src={image2} alt="Image 2" />
          </div>
          <div>
            <img src={image3} alt="Image 3" />
          </div>
        </Carousel>
      </div>
      <div className="welcome-para">
        <i>A powerful tool designed to assist in the early detection of respiratory diseases. Our platform employs cutting-edge technology to analyze X-ray images and provide valuable insights into the probability of several respiratory conditions, including pneumonia, tuberculosis, lung cancer, and COVID-19.</i>
      </div>
    </div>
  );
}

export default App;

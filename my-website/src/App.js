import React from 'react';
import Navbar from './Navbar';
import './App.css'; // If you have additional CSS

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Place the Navbar component */}
      {/* Add your content here */}
      <div className="content">
        <h1><span className="first-letter"><i>S</i></span>WASA</h1>
        <h2 className="welcome-text">Welcome to our website,</h2> {/* Add the class here */}
      </div>
      <div className="welcome-para">
        <i>A powerful tool designed to assist in
              the early detection of respiratory diseases. Our platform employs
              cutting-edge technology to analyze X-ray images and provide valuable insights into the probability of
              several respiratory conditions, including pneumonia, tuberculosis, lung cancer, and COVID-19.</i>
      </div>
    </div>
  );
}

export default App;

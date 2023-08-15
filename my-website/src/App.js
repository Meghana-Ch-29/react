import React from 'react';
import Navbar from './Navbar';
import './App.css'; // If you have additional CSS

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Place the Navbar component */}
      {/* Add your content here */}
      <div className="content">
        <h1><span class="first-letter"><i>S</i></span>WASA</h1>
      </div>
      {/* Your main content */}
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import logoImage from '/workspace/react/my-website/src/logo.png'; 
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  useEffect(() => {
    const navBar = document.querySelector("nav");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      navBar.style.top = `${scrollY}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li className="logo">
            <img src={logoImage} alt="Logo" />
          </li>
          <li className="specific-position"><a href="#">Patients</a></li>
          <li className="specific-position"><a href="#">New Patient</a></li>
          <li className="specific-position"><a href="#">SignUp/Login</a></li>
        </ul>
      </nav>
      {/* Add your text or content here */}
      <div className="content">
        <h2>Welcome to Our Website</h2>
      </div>
    </div>
  );
};

export default Navbar;

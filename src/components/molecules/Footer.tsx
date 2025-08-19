import React from "react";
import "../../styles/index.css";
import Logo from "../../assets/media/Logo (1).png"; 
import Boutton from "../atoms/Boutton";

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      {/* Texte principal */}
      <h1 className="footer-title">JOIN MACRO FOR FINANCE MANAGEMENT</h1>

      {/* Bouton centré */}
      <div className="footer-button">
        <Boutton label="Join Macro Now" className="btn-gradient" />
      </div>

      {/* Logo centré */}
      <div className="logox">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      {/* Liens */}
      <div className="container">
        <span className="section">Terms & Agreements</span>
        <span className="section">©2023 Macro All Rights Reserved</span>
        <span className="section">Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;

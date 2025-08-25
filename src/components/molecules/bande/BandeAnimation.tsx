import React from "react";
import "./bande.css";

const Marquee: React.FC = () => {
  return (
    <div className="marquee">
        <div className="marquee-content">
         <span><span className="star"></span> ABOUT US <span className="star"></span> ABOUT US 
         <span className="star"></span> ABOUT US <span className="star"></span> ABOUT US </span>
        <span><span className="star"></span> ABOUT US <span className="star"></span> ABOUT US
         <span className="star"></span> ABOUT US <span className="star"></span> ABOUT US </span>
        </div>
    </div>
  );
};

export default Marquee;

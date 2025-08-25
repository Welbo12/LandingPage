

import "./trois.css";
import Boutton from "../atoms/Boutton";
import BandeIncline from "../molecules/bande/incliner1/BandeIncline";


// import React from "react";

// const Features = () => {
//   return (
//     <div className="features">
//       <div className="card dark">
//         <div className="icon wave"></div>
//         <h2>Tracking</h2>
//         <p>Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla</p>
//       </div>

//       <div className="card light">
//         <div className="icon shield"></div>
//         <h2>Protection</h2>
//         <p>Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla</p>
//       </div>

//       <div className="card light wide">
//         <div className="icon heart"></div>
//         <h2>Easiness</h2>
//         <p>Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla</p>
//       </div>
//     </div>
//   );
// };

// export default Features;
const Features = () => {
  return (
    <div className="TOTAL">
      <BandeIncline />
    <div className="info">
        <p>
          <span>Lorem ipsum dolor sit amet consecteturet semper nunc in odio. </span>
          <span>Lorem ipsum dolor sit amet consecteturet semper nunc in odio.</span>
          <span>Lorem ipsum dolor sit amet consecteturet semper nunc </span></p>
          <Boutton className="" label="Digitize Now"/>
          </div>
          
    <div className="features">
      <div className="card dark">
        <div className="icon wave"></div>
        <h2>Tracking</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla</p>
      </div>

      <div className="card light">
        <div className="icon shield"></div>
        <h2>Protection</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla</p>
      </div>

      <div className="card light">
        <div className="icon star"></div>
        <h2>Flexibility</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla</p>
      </div>

      <div className="card light wide">
        <div className="icon heart"></div>
        <h2>Easiness</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla</p>
      </div>
    </div>
    </div>
  );
};

export default Features;

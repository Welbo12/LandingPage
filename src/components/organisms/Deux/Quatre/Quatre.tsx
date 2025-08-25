// import React from "react";
// import "./quatre.css";

// const Quatre = () => {
//   return (
//     <div className="quatre-app">
//       <div className="quatre-card-container">
//         <div className="quatre-cards">
//           <div className="quatre-card quatre-card1">
//             <div className="quatre-card-header">
             
//             </div>
           
//           </div>

//           <div className="quatre-card quatre-card2">
            
          
//           </div>
//         </div>

//         {/* Text */}
//         <div className="quatre-text-section">
//           <h1>
//             Simple way to <br /> manage your money
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla erat
//             morbi amet dui mattis. Ut neque facilisis etiam dolor mauris leo
//             nisl. Sed dictum a eget vestibulum vel vitae et enim turpis.
//           </p>

//           {/* Slider indicators */}
//           <div className="quatre-slider">
//             <div className="quatre-dot active"></div>
//             <div className="quatre-dot"></div>
//             <div className="quatre-dot"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quatre;

import "./quatre.css";
import Card1 from "../../../../assets/media/Card1.png"
import Card2 from "../../../../assets/media/Card2.png"


const Quatre = () => {
  return (
    <div className="quatre-app">
      <div className="quatre-card-container">
        <div className="quatre-cards">
          <div
            className="quatre-card quatre-card1">

            <div className="quatre-card-header">
              {/* Optionnel : Ajoutez un logo ou une puce si nécessaire */}
            </div>
          </div>
             <img src={Card1} alt="Card 1" className="card-image" />
             <img src={Card2} alt="Card 2" className="card-image" />
        </div>

        {/* Texte */}
        <div className="quatre-text-section">
          <h1>
            Simple façon de <br /> gérer votre argent
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla erat
            morbi amet dui mattis. Ut neque facilisis etiam dolor mauris leo
            nisl. Sed dictum a eget vestibulum vel vitae et enim turpis.
          </p>

          {/* Indicateurs de curseur */}
          <div className="quatre-slider">
            <div className="quatre-dot active"></div>
            <div className="quatre-dot"></div>
            <div className="quatre-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quatre;
// import React from "react";
// import "./Deux.css"; 

// export default function Deuxieme() {
//   return (
//     <section className="deux">
//       <div className="deux-content">
//         <h1>
//           Get to know <br /> <span>More about Macro</span>
//         </h1>
//         <p>
//            <span>Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla erat morbi</span>
//            <span> dictum a eget vestibulum vel vitae et enim turpis. Nunc facilisi sed </span>
//            <span> dignissim purus erat adipiscing adipiscing pellentesque</span>
//         </p>
// <button className="hea" type="button"> GET STARTED <span className="arrow">  &rarr;</span> </button>
//       </div>

//       <div> <p className="jj">496KP</p>
//       <p className="jjj">466M</p>
//        <p className="jjjj">256%</p>
//       </div>
//     </section>
//   );
// }

import "./Deux.css";
import BandeAnimation from "../../molecules/bande/BandeAnimation";

export default function Deuxieme() {
  return (
    <div>
      <BandeAnimation />
    
    <section className="deux">
      
      <div className="deux-content">
        <h1>
          Get to know <br /> <span>More about Macro</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vitae euismod nulla erat morbi
          amet duis mattis. Ut neque facilisis etiam dolor mauris leo nisl. Sed
          dictum a eget vestibulum vel vitae et enim turpis. Nunc facilisi sed
          dignissim purus erat adipiscing adipiscing pellentesque.
        </p>
        <button className="hea" type="button">
          Get Started <span className="arrow">&rarr;</span>
        </button>
      </div>

  
      <div className="cards">

        <div className="card light">
          <h2>456K</h2>
          <p>Macro Users from all over the globe</p>
        </div>

        <div className="card dark">
          <h2>
            <span className="green">466M</span>
  
          </h2>
          <p>Macro’s Revenue in 2023 in the first Quarter</p>
        </div>


        <div className="card light">
          <h2>256%</h2>
          <p>Macro Investment Growth in 2023</p>
        </div>
      </div>
    </section>

      
    </div>
  );
}

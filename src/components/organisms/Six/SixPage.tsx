// import React from 'react';

// const IconGrid = () => {
//   const icons = [
//     'apple-pay', 'skrill', 'paypass', 'astropay', 'visa', 'paypal',
//     'gpay', 'robokassa', 'neteller'
//   ];

//   const gridStyle: React.CSSProperties = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '10px',
//     maxWidth: '300px',
//     margin: '0 auto',
//     padding: '20px',
//     justifyContent: 'center'
//   };

//   const itemStyle: React.CSSProperties = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '80px',
//     background: '#f5f5f5',
//     borderRadius: '10px',
//     textAlign: 'center' // Must be a valid TextAlign value
//   };

//   const iconStyle: React.CSSProperties = {
//     fontSize: '14px',
//     color: '#666'
//   };

//   return (
//     <div style={gridStyle}>
//       {icons.map((icon, index) => (
//         <div key={index} style={itemStyle}>
//           <span style={iconStyle}>{icon.replace('-', ' ').toUpperCase()}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default IconGrid;
import React from 'react';


import img3 from "../../../assets/media/img3.png";
import img4 from "../../../assets/media/img4.png";
import "./six.css"
import img6 from "../../../assets/media/img6.png";
import img7 from "../../../assets/media/img7.png";
import img8 from "../../../assets/media/img8.png";
import img9 from "../../../assets/media/img9.png";
import img1 from "../../../assets/media/img1.png"
import Incliner2 from "../../organisms/Six/SixPage";
import img2 from "../../../assets/media/img2.png";

const IconGrid = () => {
  const icons = [
    { name: "apple-pay", src: img1 },
    { name: "skrill", src: img2 },
    { name: "paypass", src: img3 },
    { name: "astropay", src: img4 },
    { name: "visa", src: img4 },
    { name: "paypal", src: img6 },
    { name: "gpay", src: img7 },
    { name: "robokassa", src: img8 },
    { name: "neteller", src: img9 },
  ];


  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '200px',
    justifyContent: 'center',
    
  };

  const itemStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px',
    background: '#f5f5f5',
    borderRadius: '10px',
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: '80px',
    maxHeight: '80px',
    objectFit: 'contain',
  };

  return (
    <div>
    <Incliner2 />
    <div style={gridStyle}>
      {icons.map((icon, index) => (
        <div key={index} style={itemStyle}>
          <img
            src={icon.src}
            alt={icon.name.replace('-', ' ')}
            style={imageStyle}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default IconGrid;
// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../../styles/index.css'
// import Logo from "../../assets/media/Logo (1).png"


// type HeaderProps={ 
//   label:string
//   path:string
// }
// const headerProps:HeaderProps[]=[
//   {label:"FEATURES",path:"/"},
//   {label:"PRICING",path:"/Pricing"},
//   {label:"ABOUT",path:"/About"},
//   {label:"FAQ",path:"/FAQ"},

// ]
// const Header:React.FC=()=> {
//   return (
//       <div className='header'>
//         <img src={Logo} alt="logo" className='lkogo' />
//         <nav className='navbar'>
//           <ul className='nav-links'> {headerProps.map((item, index) => (
//             <li key={index}>
//               <Link to={item.path}>{item.label}</Link>
//             </li>
//           ))}</ul>
//         </nav>
//         <div className='bb'>
//           <button className="header-buttonX" type="button">WHO IT WORKS</button>
//           <button className="header-button" type="button">SIGN UP</button>
//         </div>
//       </div>
//   )
// }

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/media/Logo (1).png";
import "../../styles/index.css";

const navItems = [
  { label: "FEATURES", path: "/" },
  { label: "PRICING", path: "/Pricing" },
  { label: "ABOUT", path: "/About" },
  { label: "FAQ", path: "/FAQ" },
];

const Navbar: React.FC = () => {
  return (
    <header className="header">
      
      <div className="header-logo">
        <img src={Logo} alt="Macro Logo" />
      </div>

      
      <nav className="navbar">
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      
      <div className="header-actions">
        <button className="btn-outline">WHO IT WORKS</button>
        <button className="btn-primary">SIGN UP</button>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/index.css'
import Logo from "../../assets/media/Logo (1).png"
import Fra from "../../assets/media/Fra.png"
import Boutton from '../atoms/Boutton'
 import test from "../../assets/media/test.png"; 
 import testx from "../../assets/media/testx.png";

type HeaderProps={ 
  label:string
  path:string
}
const headerProps:HeaderProps[]=[
  {label:"FEATURES",path:"/"},
  {label:"PRICING",path:"/Pricing"},
  {label:"ABOUT",path:"/About"},
  {label:"FAQ",path:"/FAQ"},

]
const Header:React.FC=()=> {
  return (
    <section className="home">
      <div className='header'>
        <img src={Logo} alt="logo" className='lkogo' />
        <nav className='navbar'>
          <ul className='nav-links'> {headerProps.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}</ul>
        </nav>
        <div className='bb'>
          <button className="header-buttonX" type="button">WHO IT WORKS</button>
          <button className="header-button" type="button">SIGN UP</button>
        </div>

      </div>

      <div className="hero-content">
        <h1>
          MANAGE YOUR <img src={Fra} alt="Hero" /> <br />
          PERSONAL<span className="gradient-text"> FINANCE</span> <br />
          THE <span className="gradient-text-2">EASY WAY</span>
        </h1>
        <div className="overlay-cards">
          <img src={test} alt="Card 1" className="card-image card1" />
          <img src={testx} alt="Card 2" className="card-image card2" />
        </div>
        <div><button className="hea" type="button"> GET STARTED <span className="arrow">  &rarr;</span> </button></div>

        <div className="info">
          <p>
            <span>Lorem ipsum dolor sit amet consecteturet semper nunc in odio. </span><br />
            <span>Lorem ipsum dolor sit amet consecteturet semper nunc in odio.</span><br />
            <span>Lorem ipsum dolor sit amet consecteturet semper nunc </span></p><br />
          <div className="avatars">
            <Boutton label="Digitize Now" className="" />

          </div>
        </div>
      </div>

    </section>
  )
}

export default Header


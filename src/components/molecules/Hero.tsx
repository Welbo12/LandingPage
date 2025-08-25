
import '../../styles/index.css'
import Navbar from './Navbar'

import Boutton from '../atoms/Boutton'
 import test from "../../assets/media/test.png"; 
 import testx from "../../assets/media/testx.png";

const Hero = () => (
  <section className="home">

    <Navbar/>

    <div className="hero-content">
      <h1>
        MANAGE YOUR <br/>
        PERSONAL<span className="gradient-text"> FINANCE</span> <br/>
        THE <span className="gradient-text-2">EASY WAY</span>
      </h1>
      <div className="overlay-cards">
        <img src={test} alt="Card 1" className="card-image card1" />
        <img src={testx} alt="Card 2" className="card-image card2" />
      </div>
      <div className="button-container"><button className="hea" type="button"> GET STARTED <span className="arrow">  &rarr;</span> </button></div>

      <div className="info">
        <p>
          <span>Lorem ipsum dolor sit amet consecteturet semper nunc in odio. </span>
          <span>Lorem ipsum dolor sit amet consecteturet semper nunc in odio.</span>
          <span>Lorem ipsum dolor sit amet consecteturet semper nunc </span></p>

        <div className="avatars">
          <Boutton label="Digitize Now"/>

        </div>
      </div>
    </div>

  </section>
)

export default Hero


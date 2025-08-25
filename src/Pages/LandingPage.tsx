
import  Hero from '../components/molecules/Hero'

import Deuxieme from '../components/organisms/Deux/Deuxieme'

import Troisieme from '../components/organisms/Troisieme'
import Quatre from '../components/organisms/Deux/Quatre/Quatre'
import Cinq from '../components/organisms/Deux/Quatre/Cinq/Cinq'

import SixPage from '../components/organisms/Six/SixPage'

const LandingPage = () => {
  return (
    <div>
      <Hero />

   
    <Deuxieme />

    <Troisieme />
    
    <Quatre />
    <Cinq />
    
    <SixPage />

    </div>
  )
}

export default LandingPage
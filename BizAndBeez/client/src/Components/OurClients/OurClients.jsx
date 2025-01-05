import React from 'react';
import bizAndBeez_logo from '../../assets/bizAndBeez_logo.png';
import country_mall_logo from '../../assets/country_mall_logo.png';
import RealBeezNew from '../../assets/RealBeezNew.png';
import SalesBeezNew from '../../assets/SalesBeezNew.png';
import StartUpLeague_Logo from '../../assets/StartUpLeague_Logo.png';
import './OurClients.css'



const OurClients = () => {
  return (
    <div className='client-container'>
      <p className='clients-para'>Our Clients</p>
      <section className='logoimages'>
        
        <img src={RealBeezNew} alt="bizandbeezlogo" className='realbeezimg'/>
        <img src={SalesBeezNew} alt="salesbeez" className='salesbeezimg'/>
        <img src={StartUpLeague_Logo} alt="startupleague" className='startupimg'/>
        <img src={country_mall_logo} alt="countrymall" className='countrymallimg'/>

      </section>
    </div>
  )
}

export default OurClients

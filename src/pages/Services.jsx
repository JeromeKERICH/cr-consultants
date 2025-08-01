import React, { useEffect } from 'react'
import Hero from '../components/services/SHero'
import CoreServices from '../components/sections/ServiceOverview';
import ServiceDes from '../components/services/ServiceDes';
import ServiceCTA from '../components/services/SCTA';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Hero/>
      <CoreServices/>
      <ServiceDes/>
      <ServiceCTA/>
    </div>
  )
}

export default Services

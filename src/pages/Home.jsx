import React, { useEffect } from 'react'
import Hero from '../components/sections/Hero';
import WhoWeHelp from '../components/sections/Who';
import CoreServices from '../components/sections/ServiceOverview';
import WhyChooseUs from '../components/sections/Why';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Hero/>
      <CoreServices/>
      <WhoWeHelp/>
      <WhyChooseUs/>
    </div>
  )
}

export default Home

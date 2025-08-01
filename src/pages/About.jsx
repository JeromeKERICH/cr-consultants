import React, { useEffect } from 'react'
import AboutHero from '../components/about/Overview';
import FirmStory from '../components/about/Story';
import LeadershipProfile from '../components/about/Leader';

import BookCTA from '../components/about/AboutCTA';


const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <AboutHero/>
      <FirmStory/>
      <LeadershipProfile/>
    
      <BookCTA/>
    </div>
  )
}

export default About

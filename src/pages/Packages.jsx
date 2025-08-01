import React, { useEffect } from 'react'
import PackagesHero from '../components/packages/PHero'
import PackageGrid from '../components/packages/PSection';
import PackagesIntro from '../components/packages/Why';
import PackagesCTA from '../components/packages/PCta';

const Packages = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  return (
    <div>
      <PackagesHero/>
      <PackageGrid/>
      <PackagesIntro/>
      <PackagesCTA/>
    </div>
  )
}

export default Packages

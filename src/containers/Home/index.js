import React, { useEffect, useState } from 'react'
import HeroView from './components/HeroView'
import "./index.scss"
import { heroView } from './services/heroView';

function Home() {
  const [heroViewData,setHeroViewData] = useState({});
  useEffect(()=>{
    heroView().then(res => {
      
      setHeroViewData( res.data)
    }).catch((error) => {
      console.log('hero view error', error)
    })

  },[])
    return (
        <div className="main-container hero-view">
          <HeroView heroViewData={heroViewData}/>
        </div>
    )
}

export default Home

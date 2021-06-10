import React, { useEffect, useState } from 'react'
import CategoryList from './components/category-list';
import HeroView from './components/HeroView';
import "./index.scss";
import { categoryList } from './services/categoryList';
import { heroView } from './services/heroView';

function Home() {
  const [heroViewData,setHeroViewData] = useState({});
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
    heroView().then(res => {
      
      setHeroViewData( res.data)
    }).catch((error) => {
      console.log('hero view error', error)
    });

    categoryList().then(res => {
      setCategories(res.data);
    }, (err) => {
      console.log("error",err)
    })

  },[])
    return (
      <>
        <div className="main-container hero-view">
          <HeroView heroViewData={heroViewData}/>
        </div>
        <div className="main-container">
          <CategoryList categories={categories} />
        </div>
        </>
    )
}

export default Home

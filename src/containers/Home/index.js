import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import CategoryList from './components/category-list';
import HeroView from './components/HeroView';
import "./index.scss";
import { categoryList } from './services/categoryList';
import { heroView } from './services/heroView';

function Home() {
  const [heroViewData,setHeroViewData] = useState({});
  const [categories,setCategories] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    
    heroView().then(res => {
      setHeroViewData( res.data);
      setLoading(false);

    }).catch((error) => {
      console.log('hero view error', error)
    });

    categoryList().then(res => {
      setCategories(res.data);
      setLoading(false);
    }, (err) => {
      console.log("error",err)
    })

  },[])
    return (
      <>
      {loading && <Loader />}
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

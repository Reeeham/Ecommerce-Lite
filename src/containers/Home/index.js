import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import CategoryList from './components/category-list';
import DiscountsList from './components/discounts-list';
import HeroView from './components/hero-view';
import './index.scss';
import { categoryList } from './services/categoryList';
import { discountList } from './services/discountList';
import { heroView } from './services/heroView';

function Home() {
  const [heroViewData,setHeroViewData] = useState({});
  const [categories,setCategories] = useState([]);
  const [discounts,setDiscounts] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    
    heroView().then(res => {
      setHeroViewData( res.data);
      setLoading(false);
    }).catch((error) => {
      console.log('error in getting heroViewData', error)
    });

    categoryList().then(res => {
      setCategories(res.data);
      setLoading(false);
    }, (err) => {
      console.log("error in getting categories",err)
    })

    discountList().then(res => {
      setDiscounts(res.data);
      setLoading(false);
    },(err) => { 
      console.log("error in getting discounts",err)
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
        <div className="main-container">
          <DiscountsList discounts={discounts} />
        </div>
        </>
    )
}

export default Home

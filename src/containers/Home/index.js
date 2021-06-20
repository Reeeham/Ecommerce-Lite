import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import CategoryList from './components/category-list';
import DiscountsList from './components/discounts-list';
import HeroView from './components/hero-view';
import './index.scss';
import PromotionsList from './promotions-list';
import { categoryList } from './services/categoryList';
import { discountList } from './services/discountList';
import { heroView } from './services/heroView';
import { promotionsList } from './services/promotionsList';

const Home = () => {
  const [heroViewData, setHeroViewData] = useState({});
  const [categories, setCategories] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    heroView().then(res => {
      setHeroViewData(res.data);
      setLoading(false);
    }).catch((error) => {
    });

    categoryList().then(res => {
      setCategories(res.data);
      setLoading(false);
    }, (err) => {
    })

    discountList().then(res => {
      setDiscounts(res.data);
      setLoading(false);
    }, (err) => {
    })
    promotionsList().then(res => {
      setPromotions(res.data);
    
      setLoading(false);
    }, (err) => {}
    )

  }, [])
  return (
    <>
      {loading && <Loader />}
      <div className="main-container hero-view">
        {heroViewData != null && <HeroView heroViewData={heroViewData} /> }
      </div>
      <div className="main-container">
        {categories.length > 0 && <CategoryList categories={categories} /> }
      </div>
      <div className="main-container">
        {discounts.length > 0 && <DiscountsList discounts={discounts} />}
      </div>
      <div className="main-container">
        {promotions.length > 0 && <PromotionsList promotions={promotions}/>}
      </div>
    </>
  )
}

export default Home

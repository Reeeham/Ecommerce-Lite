


import React from 'react'
import { Route } from 'react-router-dom'
import Content from './Content'
import Footer from './Footer'
import Header from './Header/Header'
import ProductsByCategory from '../containers/Home/components/sort-by-category/index'
const Layout = () => {
    return (
        <div className="main-container">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Layout

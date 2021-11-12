


import React from 'react'
import Content from './Content'
import Footer from './Footer/index'
import Header from './Header/Header'

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

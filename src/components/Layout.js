import React from 'react'
import Content from './Content'
import Footer from './Footer/index'
import Header from './Header/Header'

const Layout = ({children}) => {
    return (
        <div className="main-container full-height">
            <Header />
            <Content>{children}</Content>
            <Footer />
        </div>
    )
}

export default Layout

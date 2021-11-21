import DesktopNavbar from "../DesktopNavbar"
import MobileNavbar from "../MobileNavbar"
import React, { useEffect, useState } from 'react';
import { initCart } from "../../containers/Home/services/cartService";


const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => { 
        initCart();
    })
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            e.preventDefault();
            setWidth(window.innerWidth);
        }
        );
    }, [width]);

    return (
        <>
            {width > 812 || width >= 540 ? <DesktopNavbar /> : <MobileNavbar />}

        </>);
}

export default Navbar;
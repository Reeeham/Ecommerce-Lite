import DesktopNavbar from "../DesktopNavbar"
import MobileNavbar from "../MobileNavbar"
import React, { useEffect, useState } from 'react';


const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            e.preventDefault();
            setWidth(window.innerWidth);
        }
        );
    }, [width]);

    return (
        <>
            {width > 812 || width > 767 ? <DesktopNavbar /> : <MobileNavbar />}

        </>);
}

export default Navbar;
import React from 'react';
import styled from 'styled-components';

const NavLinks = styled.ul`
    li{
        padding: 10px 25px;
        font-size: 1.8rem;
        text-align: center;
    }

`;

const NavLeft = ({ open, setOpen}) => {

    const handleMenuClick = () => {
        setOpen(!open)
    }
    return(
        <NavLinks open={open}>
            <li><a href="#home" data-after="Home" onClick={handleMenuClick}>Home</a></li>
            <li><a href="#about" data-after="About" onClick={handleMenuClick}>About</a></li>
            <li><a href="#projects" data-after="Projects" onClick={handleMenuClick}>Projects</a></li>
            <li><a href="#contact" data-after="Contact" onClick={handleMenuClick}>Contact</a></li>
        </NavLinks>
    )
}
export default NavLeft
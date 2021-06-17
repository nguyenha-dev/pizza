import React, { useState } from 'react';
import Logo from '../assets/images/pizzaLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className='navbar'>
            <div className='left-side' id={openLinks ? 'open' : 'close'}>
                <img src={Logo} alt='logo'/>
                <div className='hidden-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Contact'>Contact</Link>
                </div>
            </div>

            <div className='right-side'>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>
            </div>
        </div>
    );
};

export default Navbar;

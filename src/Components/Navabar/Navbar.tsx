import React, { memo, useRef } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import MyButton from '../Button/Button';
import './navbar.css';
import IconButton from '../IconButton/IconButton';

const pages = ['صفحه اصلی', 'فرانت اند', 'امنیت', 'مقالات'];

function Navbar() {
    const navRef = useRef<HTMLDivElement>();
    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle(
                "responsive_nav"
            );
        }
    };

    return (
        <header>
            <div className="container flexBasic" >
                <IconButton className='textMainColor nav-btn' onClick={showNavbar}>
                    <FaBars />
                </IconButton>
                <div className='mainHeader-right d-flex align-items-center'>
                    <Logo />
                    <Menu listPages={pages} ref={navRef} >
                        <IconButton className='nav-btn nav-close-btn text-light' onClick={showNavbar}>
                            <FaTimes />
                        </IconButton>
                    </Menu>
                </div>
                <div className='mainHeader-left flexBasic'>
                    <IconButton className='searchBtn'>
                        <BiSearchAlt2 />
                    </IconButton>
                    <IconButton className='me-2 ShoppingCartBtn'>
                        <FaShoppingCart />
                    </IconButton>
                    <MyButton variant='outlined' className='py-2 me-2' >
                        سهیل طهرانی و سروش طهرانی
                    </MyButton>
                </div>
            </div>
        </header>
    );
}
export default memo(Navbar);
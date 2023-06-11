import React, { memo, useRef } from 'react';
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import MyButton from '../Button/Button';
import './navbar.css';
import IconButton from '../IconButton/IconButton';
import Avatar from './Avatar/Avatar';

const pages = [
    {
        id: 1,
        title: "صفحه اصلی",
        path: "/"
    },
    {
        id: 2,
        title: "فرانت اند",
        path: "/frontproducts"
    },
    {
        id: 3,
        title: "بک اند",
        path: ""
    },
    {
        id: 4,
        title: "مقالات",
        path: ""
    },
];

const Navbar = memo(function Navbar() {
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
            <div className="container flexBasic">
                <IconButton className='textMainColor nav-btn' onClick={showNavbar}>
                    <FaBars />
                </IconButton>
                <div className='mainHeader-right d-flex align-items-center'>
                    <Logo />
                    <Menu listPages={pages} ref={navRef} >
                        <IconButton className='nav-btn nav-close-btn text-light' onClick={showNavbar}>
                            <FaTimes />
                        </IconButton>
                        <Avatar className='menu-avatar' alt='avatar' />
                        <MyButton variant='outlined' className='menu-account py-2 me-2'>
                            سهیل طهرانی و سروش طهرانی
                        </MyButton>
                    </Menu>
                </div>
                <div className='mainHeader-left flexBasic'>
                    <IconButton className='me-2 ShoppingCartBtn'>
                        <FaShoppingCart />
                    </IconButton>
                    <MyButton variant='outlined' className='py-2 me-2'>
                        سهیل طهرانی و سروش طهرانی
                    </MyButton>
                    <Avatar src='images/avatar.jpg' alt='avatar' />
                </div>
            </div>
        </header>
    );
})

export default Navbar;
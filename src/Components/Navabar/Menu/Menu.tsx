import React, { ReactNode, forwardRef, memo } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

interface MenuProps {
    children?: ReactNode;
    listPages: { id: number, title: string, path: string }[];
}

const Menu = memo(forwardRef(({ listPages, children }: MenuProps, ref: any) => {
    return (
        <nav className='navbar-nav' ref={ref}>
            <ul className='menu m-0'>
                {children}
                {listPages.map(page => (
                    <li key={page.id}>
                        <Link to={page.path} className='btn outline-0'> {page.title} </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}))

export default Menu;
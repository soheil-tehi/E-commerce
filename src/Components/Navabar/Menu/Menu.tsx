import React, { ReactNode, forwardRef, memo } from 'react'
import './menu.css';

interface MenuProps {
    children?: ReactNode;
    listPages: string[];
}

const Menu = memo(forwardRef(({ listPages, children }: MenuProps, ref: any) => {
    return (
        <nav ref={ref}>
            <ul className='menu m-0'>
            {children}
                {listPages.map(page => (
                    <li key={page}>
                        <a href="#" className='btn outline-0'> {page} </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}))

export default Menu;
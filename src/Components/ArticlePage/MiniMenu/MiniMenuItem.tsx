import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./MiniMenuItem.css"

interface MiniMenuItemProps {
    title: string;
    // allData: [{ id: number, title: string }]
    allData: { id: number; title: string; }[];
    coursePath: string
}


function MiniMenuItem({ title, allData, coursePath }: MiniMenuItemProps) {

    const [showSubMenu, setShowSubMenu] = useState(false);
    const [classSubmenu, setClassSubmenu] = useState("disableSub");

    function toggleShowSubMenu() {
        setShowSubMenu(!showSubMenu);
    }


    useEffect(() => {
        const toggleShow = showSubMenu ? "enableSub" : "disableSub";
        setClassSubmenu(toggleShow);
    }, [showSubMenu])

    return (
        <div className='mini-menu-wrapper' >
            <div className='mini-menu'>
                <ul >
                    <li>
                        <div className='mini-menu-item'>
                            <p>{title}</p>
                            <a onClick={toggleShowSubMenu}>
                                {
                                    showSubMenu ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />
                                }
                            </a>
                        </div>
                        {showSubMenu &&
                            <div className={`mini-submenu ${classSubmenu}`}>
                                <ul>
                                    {
                                        allData.map(item => (
                                            <Fragment key={item.id}>
                                                <li>
                                                    <Link to={`/${coursePath}/${item.id}`}>{item.title}</Link>
                                                </li>
                                            </Fragment>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default MiniMenuItem
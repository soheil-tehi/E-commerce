import React from 'react'
import './CoursesHeader.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
interface CoursesHeaderProps {
    title: string,
    desc: string,
    linkTitle: string,
}

function CoursesHeader({ title, desc, linkTitle }: CoursesHeaderProps) {
    return (
        <div className="courses">
            <div className="container">
                <div className="courses-header">
                    <div className="courses-header__right">
                        <span className="courses-header__title title">{title}</span>
                        <span className="courses-header__text">{desc}</span>
                    </div>
                    {
                        !!linkTitle &&
                        <div className="courses-header__left">
                            <a href="#" className="courses-header__link">
                                {linkTitle}
                                <AiOutlineArrowLeft />
                            </a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}

export default CoursesHeader;
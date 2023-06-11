import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './CoursesHeader.css';
interface CoursesHeaderProps {
    title: string,
    desc: string,
    linkTitle: string,
}

function CoursesHeader({ title, desc, linkTitle }: CoursesHeaderProps) {
    return (
        <div className="courses">
                <div className="courses-header">
                    <div className="courses-header-right">
                        <span className="courses-header-title">{title}</span>
                        <span className="courses-header-text">{desc}</span>
                    </div>
                    {
                        !!linkTitle &&
                        <div className="courses-header-left">
                            <a href="#" className="courses-header-link">
                                {linkTitle}
                                <AiOutlineArrowLeft />
                            </a>
                        </div>
                    }
                </div>
        </div>
    )

}

export default CoursesHeader;
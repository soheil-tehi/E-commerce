import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import courseCoverImg from '../../Asset/Images/course-cover.png';

import './CourseBox.css'

function CourseBoxItem() {
    return (
        <>
            <div className="course">
                <div className="course-cover">
                    <img src={courseCoverImg} alt="course-cover" />
                </div>
                <div className="course-info">
                    <h4 className="course-title">دوره پروژه محور</h4>
                    <div className="course-teacher-rating">
                        <div className="course-teacher">
                            <FaChalkboardTeacher />
                            <span>سهیل طهرانی</span>
                        </div>
                        <div className="course-rating">
                            <span>rating</span>
                        </div>
                    </div>
                    <div className="course-student-price">
                        <div className="course-student">
                            <IoIosPeople />
                            <span>500</span>
                        </div>
                        <p className='course-price'>1,000,000</p>
                    </div>
                </div>
                <div className="course-footer">
                    <a className='course-footer-link' href="#">مشاهده اطلاعات</a>
                    <BsFillArrowLeftSquareFill style={{ fontSize: "20px" }} />
                </div>
            </div>
        </>
    )
}

export default CourseBoxItem;
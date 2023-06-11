import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import courseCoverImg from '../../Asset/Images/course-cover.png';

import './CourseBox.css'

interface CourseBoxItemProps {
    title: string;
    teacher: string;
    studentCount: number;
    price: string;
}

function CourseBoxItem({ title, teacher, studentCount, price }: CourseBoxItemProps) {
    return (
        <>
            <div className="course">
                <div className="course-cover">
                    <img src={courseCoverImg} alt="course-cover" />
                </div>
                <div className="course-info">
                    <h5 className="course-title">{title}  </h5>
                    <div className="course-teacher-rating">
                        <div className="course-teacher">
                            <FaChalkboardTeacher />
                            <span>{teacher} </span>
                        </div>
                        {/* <div className="course-rating">
                            <span>rating</span>
                        </div> */}
                    </div>
                    <div className="course-student-price">
                        <div className="course-student">
                            <IoIosPeople />
                            <span>{studentCount}</span>
                        </div>
                        <p className='course-price'>{price}</p>
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
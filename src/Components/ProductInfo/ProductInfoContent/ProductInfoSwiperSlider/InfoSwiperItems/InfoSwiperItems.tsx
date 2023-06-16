import React, { memo } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import './infoSwiperItems.css';
import Button from '../../../../Button/Button';

interface InfoSwiperItemsprops {
    img?: string;
    title?: string;
    teacher?: string;
    studentCount?: number;
    price?: string;
    hours?: string;
}

const InfoSwiperItems = memo(function InfoSwiperItems({ img, title, teacher, hours, studentCount, price, }: InfoSwiperItemsprops) {

    return (
        <div className='infoSwiperItem-holder'>
            <div className='infoSwiperItem-content'>
                <div className='infoSwiperItem-imgWrapper w-100 h-100'>
                    <img src={img} alt={title} className='w-100 h-100' />
                </div>
                <div className="infoSwiperItem-details">
                    <h5> {title} </h5>
                    <p className='flexBasic'>
                        <span className='flexBasic'> <BiTimeFive className='me-2'/> <strong> {hours} ساعت </strong> </span>
                        <span className='flexBasic'>  <strong className='me-2'> {studentCount} </strong> <IoIosPeople /> </span>
                    </p>
                    <p className='infoSwiperItem-details-teacher'>
                        <FaChalkboardTeacher />
                        <span> {teacher} </span>
                    </p>
                    <Button variant='outlined' className='w-100 py-2 mt-3'> مشاهده اطلاعات بیشتر </Button>
                </div>
            </div>
            <div>
                <span>

                </span>
                <p></p>
            </div>
        </div>
    );
});

export default InfoSwiperItems;
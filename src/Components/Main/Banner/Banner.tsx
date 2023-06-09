import React, { ReactNode, memo } from 'react'
import IconButton from '../../IconButton/IconButton';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdStopwatch } from 'react-icons/io';
import { FaCode, FaUserGraduate } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import BannerItem from './BannerItem/BannerItem';
import './banner.css';

interface BannerGoalsDataType {
    id: number,
    icon: ReactNode,
    title: string,
}

const bannerGoalsData: BannerGoalsDataType[] = [
    {
        id: 1,
        icon: <IoMdStopwatch />,
        title: 'سریع یاد بگیر',
    },
    {
        id: 2,
        icon: <FaCode />,
        title: 'حرفه ای یاد بگیر',
    },
    {
        id: 3,
        icon: <FaUserGraduate />,
        title: 'با خیال راحت استخدام شو',
    },
]

const Banner = memo(function Banner() {
    return (
        <section>
            <div className="container-fliud banner">
                <h1>ما به هر قیمتی دوره آموزشی تولید نمی کنیم !</h1>
                <p>با آکادمی سبزلرن، برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.</p>
                <div className='banner-search align-items-center'>
                    <input type="text" placeholder='پیداش نمیکنی؟ جستجوش کن...' />
                    <IconButton className='searchBtn'>
                        <BiSearchAlt2 />
                    </IconButton>
                </div>
                <Row className=' mt-5 banner-goal justify-content-center'>
                    {
                        bannerGoalsData.map((bannerGoalData: BannerGoalsDataType) => (
                            <BannerItem key={bannerGoalData.id} {...bannerGoalData} />
                        ))
                    }
                </Row>
            </div>
        </section>
    )
});


export default Banner;
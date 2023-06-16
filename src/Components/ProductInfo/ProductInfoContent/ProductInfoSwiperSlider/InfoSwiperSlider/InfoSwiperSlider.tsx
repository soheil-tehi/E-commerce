import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import { Link } from 'react-router-dom';
import CourseBoxItem from '../../../../CourseBox/CourseBoxItem';
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./infoSwiperSlider.css";

const fakeData = [
    { id: 1, title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 2, title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 3, title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 4, title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 5, title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 6, title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 7, title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 8, title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 9, title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },

]

const InfoSwiperSlider = memo(function InfoSwiperSlider() {

    return (
        <Swiper
            modules={[Navigation, Scrollbar]}
            slidesPerView={2}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='my-swiper'
        >
            {
                fakeData.map(course => (
                    <SwiperSlide>
                        <div className='product-swiperSlider-custom'>
                            <Link className='product-course-box course-box-link' to={`/frontend/${course.id}`}>
                                <CourseBoxItem
                                    title={course.title}
                                    teacher={course.teacher}
                                    studentCount={course.studentCount}
                                    price={course.price} />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
});

export default InfoSwiperSlider;
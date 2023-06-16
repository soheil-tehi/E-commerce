import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import { Link } from 'react-router-dom';
import exampleImg from '../../../../../Asset/Images/ProductsInfo/javaScript.png'
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./infoSwiperSlider.css";
import InfoSwiperItems from '../InfoSwiperItems/InfoSwiperItems';

const fakeData = [
    { id: 1, img: exampleImg, hours: '47', title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 2, img: exampleImg, hours: '47', title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 3, img: exampleImg, hours: '47', title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 4, img: exampleImg, hours: '47', title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 5, img: exampleImg, hours: '47', title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
    { id: 6, img: exampleImg, hours: '47', title: "آموزش 20 کتابخانه جاوااسکریپت برای بازار کار", teacher: "سروش طهرانی", studentCount: 500, price: "100,000" },
   
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
                                <InfoSwiperItems
                                    img={course.img}
                                    title={course.title}
                                    teacher={course.teacher}
                                    studentCount={course.studentCount}
                                    hours={course.hours}
                                    price={course.price}
                                     />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
});

export default InfoSwiperSlider;
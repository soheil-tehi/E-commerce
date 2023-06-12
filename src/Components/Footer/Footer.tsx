import React, { memo } from 'react';
import './footer.css';
import IconButton from '../IconButton/IconButton';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Footer = memo(function Footer() {

    return (
        <footer className='mt-5'>
            <div className="footer">
                <div className='footer-desc'>
                    <h3> عنوان سایت </h3>
                    <p className='d-none d-md-block mt-4'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد .</p>
                    <p> ما را شبکه ای اجتماعی ذیل دنبال کنید : </p>
                    <ul className='flexBasic'>
                        <li>
                            <IconButton className='iconGray mt-2'>
                                <BsInstagram />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton className='iconGray mt-2'>
                                <FaFacebook />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton className='iconGray mt-2'>
                                <FaGithub />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton className='iconGray mt-2'>
                                <FaLinkedin />
                            </IconButton>
                        </li>
                        <li>
                            <IconButton className='iconGray mt-2'>
                                <FaTwitter />
                            </IconButton>
                        </li>
                    </ul>
                </div>
                <div className='footer-right flexBasic align-items-baseline'>
                    
                    <div className='RandomTitles w-100'>
                        <h4> مطالب تصادفی: </h4>
                        <ul>
                            <li><a className='hvr-underline-from-right' href="#"> پروژه های کاربردی با پایتون </a></li>
                            <li><a className='hvr-underline-from-right' href="#"> پروژه های خلاقانه با جاوااسکریپت </a></li>
                            <li><a className='hvr-underline-from-right' href="#"> آموزش حرفه ای طراحی قالب با Html Css FlexBox از صفر </a></li>
                            <li><a className='hvr-underline-from-right' href="#"> پروژه های تخصصی با جاوا اسکریپت برای بازار کار </a></li>
                            <li><a className='hvr-underline-from-right' href="#"> دوره پروژه محور متخصص جنگو </a></li>
                        </ul>
                    </div>
                    <div className='footer-contactUs d-flex align-items-center justify-align-content-between'>
                        <div className='w-100 h-100'>
                            <h4> ارتباط ما: </h4>
                            <div className='mt-4'>
                                <p> ایمیل : sabzlearn@gmail.com </p>
                                <p> شماره تماس : 09334008385 </p>
                            </div>
                        </div>
                        <div className='footer-time-work w-100 h-100'>
                            <h4> ساعات کاری: </h4>
                            <p className='text-justify mt-5'> شنبه تا چهارشنبه 8 صبح تا 18 عصر پنج شنبه‌ها ساعت 8 صبح تا 12 ظهر </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
})

export default Footer;
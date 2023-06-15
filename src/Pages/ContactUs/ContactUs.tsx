import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { Col, Container, Row } from 'react-bootstrap';
import MyButton from '../../Components/Button/Button';
import './ContactUs.css';

function ContactUs() {
    return (
        <>

            <div className='contactUs-wrapper'>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={6} >

                            <div className='contactUs-rightSide'>
                                <Row>
                                    <Col xs={12} md={12} lg={6}>
                                        <div className='call-box borderBasic'>
                                            <FiPhoneCall />
                                            <h4>با ما تماس بگیرید</h4>
                                            <p>88464790</p>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={12} lg={6}>
                                        <div className='call-box borderBasic email'>
                                            <MdOutlineEmail />
                                            <h4>ارسال ایمیل</h4>
                                            <p>soheil.st2@gmail.com</p>

                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className='send-message-wrapper borderBasic'>
                                <div className='send-message-icon'>
                                    <BiMessageDetail />
                                    <h4>فرم تماس با ما</h4>
                                </div>
                                <div className='sned-message-form'>
                                    <div className='sned-message-form-name'>

                                        <input type="text" placeholder='نام' />
                                        <input type="text" placeholder='ایمیل' />
                                    </div>


                                    <input type="text" placeholder='موضوع' />

                                    <textarea name="" id="" cols={30} rows={7}></textarea>
                                    <MyButton variant='contained' >ارسال پیام</MyButton>
                                </div>

                            </div>

                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <div className='call-box borderBasic address'>
                                <FiPhoneCall />
                                <h4>آدرس</h4>
                                <p>تهران،یوسف آباد،میدان فرهنگ،خیابان سی و سوم،پلاک ۲۹،واحد ۲</p>
                            </div>




                            <div className='map-wrapper borderBasic'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.781368236301!2d51.41990718106466!3d35.71188702325057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01b4e8ac0045%3A0x831a07098c69a147!2sGol%20Setan%20Florist!5e0!3m2!1sen!2s!4v1631273075969!5m2!1sen!2s"
                                    width="600"
                                    height="450"
                                    // allowfullscreen=""
                                    loading="lazy"
                                    style={{ border: "0", width: "100%", height: " 395px" }}
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container >



            </div >
        </>
    )
}

export default ContactUs;
import React, { Fragment } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';
import { IoIosPricetags } from 'react-icons/io';
import './Cart.css'

import productImg from '../../Asset/Images/course-cover.png';
import MyButton from '../../Components/Button/Button';

// fake data
const db = [
    { id: 1, title: "دوره آموزشی طراحی داشبورد با Power BI", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 2, title: "اموزش پروزه محور React ", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 3, title: "دوره آموزشی طراحی داشبورد با Powبا Power BI", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 4, title: "", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 5, title: "دوره آموزشی طراحی داشبورد با Power BI", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
    { id: 6, title: "node js", imgUrl: "https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg", price: "200.000" },
]

function Cart() {
    return (
        <Container style={{ margin: "50px auto" }}>
            <Row>
                <Col xs={12} lg={8}>
                    <table className='table-content borderBasic'>
                        <thead>
                            <tr>
                                <th>محصول</th>
                                <th>قیمت</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                db.map(item => (
                                    <Fragment key={item.id}>
                                        <tr>
                                            <td>
                                                <div className='product-wrapepr'>
                                                    <div className='product-img-wrapper'>
                                                        <img src={item.imgUrl} alt="sss" />
                                                    </div>
                                                    <p>{item.title}</p>
                                                </div>
                                            </td>
                                            <td>{item.price}</td>
                                            <td>
                                                <MdDeleteForever className='delete-icon' />
                                            </td>
                                        </tr>
                                    </Fragment>
                                ))
                            }
                        </tbody>
                    </table>
                </Col>
                <Col xs={12} lg={4}>
                    <div className='total-price-box borderBasic'>
                        <div className='total-price-title'>
                            <h3>جمع کل سبد خرید</h3>
                            <IoIosPricetags />
                        </div>
                        <div className='total-price-cost'>
                            <p>مجموع</p>
                            <p>3.390.000</p>
                        </div>
                        <MyButton variant="contained">ادامه جهت تسویه حساب</MyButton>
                    </div>
                    <div className='off-box borderBasic'>
                        <input type="text" placeholder='افزودن کد تخفیف 🎫' />
                        <button>ثبت</button>
                    </div>
                    <Alert variant="success">
                        بسته‌های پستی طی ۷۲ ساعت کاری ارسال می‌شوند.
                    </Alert>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart
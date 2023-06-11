import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CourseBox from '../../Components/CourseBox/CourseBoxItem';
import { Link } from 'react-router-dom';
import CourseBoxItem from '../../Components/CourseBox/CourseBoxItem';
import { FaRegGem } from 'react-icons/fa';
import './FrontProducts.css';


function FrontProducts() {

    //get data from DB
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

    return (
        <Container>

            <Row>
                {
                    fakeData.map(course => (
                        <Fragment key={course.id}>
                            <Col md={6} lg={4}>
                                <Link className='course-box-link' to={`/frontend/${course.id}`}>
                                    <CourseBoxItem
                                        title={course.title}
                                        teacher={course.teacher}
                                        studentCount={course.studentCount}
                                        price={course.price} />
                                </Link>
                            </Col>
                        </Fragment>
                    ))
                }

            </Row>
        </Container>
    )
}

export default FrontProducts
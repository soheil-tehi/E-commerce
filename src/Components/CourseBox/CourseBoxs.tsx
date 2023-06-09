import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import CourseBoxItem from './CourseBoxItem';
import CoursesHeader from '../CoursesHeader/CoursesHeader';

function CourseBoxs() {

    // get data from DB
    const [newCourses, setNewCourses] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
    return (
        <>
            <CoursesHeader
                title="جدید ترین دوره ها"
                desc={"سکوی پرتاپ شما به سمت موفقیت"}
                linkTitle={"تمامی دوره ها"}
            />
            <Row>

                {
                    newCourses.map(item => (
                        <Col sm={12} md={6} lg={4}>
                            <CourseBoxItem />
                        </Col>
                    ))

                }
            </Row>
        </>
    )
}

export default CourseBoxs
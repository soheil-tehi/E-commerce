import React from 'react'

import './FrontProducts.css';
import { Col, Container, Row } from 'react-bootstrap';
import CourseBox from '../../Components/CourseBox/CourseBoxItem';


function FrontProducts() {
    return (
        <Container>

            <Row>
                <Col md={6} lg={4}>
                    <CourseBox />
                </Col>
                <Col md={6} lg={4}>
                    <CourseBox />
                </Col>
                <Col md={6} lg={4}>
                    <CourseBox />
                </Col>
                <Col md={6} lg={4}>
                    <CourseBox />
                </Col>
                <Col md={6} lg={4}>
                    <CourseBox />
                </Col>
                <Col md={6} lg={4}>
                    <CourseBox />
                </Col>
                <Col md={6} lg={4}>
                    <CourseBox />
                </Col>
            </Row>
        </Container>
    )
}

export default FrontProducts
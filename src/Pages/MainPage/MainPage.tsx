import React, { useState } from 'react'
import Banner from '../../Components/Main/Banner/Banner';
import CoursesHeader from '../../Components/CoursesHeader/CoursesHeader';
import { Col, Container, Row } from 'react-bootstrap';
import CourseBox from '../../Components/CourseBox/CourseBox';
import goadData from '../../Asset/GoalBoxData/goals';
import GoalBox from '../../Components/GoalBox/GoalBox';
import ArticleBox from '../../Components/Main/ArticleBox/ArticleBox';

function MainPage() {

    const [newCourses, setNewCourses] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
    const [goalBox, setGoalBox] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);

    return (
        <>
            <Banner />
            <Container>
                <CoursesHeader
                    title="جدید ترین دوره ها"
                    desc={"سکوی پرتاپ شما به سمت موفقیت"}
                    linkTitle={"تمامی دوره ها"}
                />
                <Row>

                    {
                        newCourses.map(item => (
                            <Col sm={12} md={6} lg={4}>
                                < CourseBox />
                            </Col>
                        ))
                    }

                </Row>
                <CoursesHeader
                    title={"ما چه کمکی بهتون میکنیم؟"}
                    desc={"از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"}
                    linkTitle={""}
                />
                <Row>

                    {
                        goadData.map(item => (
                            <Col xs={6} sm={6} md={6}>
                                <GoalBox
                                    title={item.title}
                                    desc={item.desc}
                                />
                            </Col>
                        ))
                    }
                </Row>

                <CoursesHeader
                    title={"جدیدترین مقاله ها"}
                    desc={"پیش به سوی ارتقای دانش"}
                    linkTitle={"تمامی مقالات"}
                />

            <ArticleBox />
            </Container>
        </>
    )
}

export default MainPage;
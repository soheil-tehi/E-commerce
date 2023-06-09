import React, { useState } from 'react'
import Banner from '../../Components/Main/Banner/Banner';
import CoursesHeader from '../../Components/CoursesHeader/CoursesHeader';
import { Col, Container, Row } from 'react-bootstrap';
import CourseBox from '../../Components/CourseBox/CourseBoxItem';
import goadData from '../../Asset/GoalBoxData/goals';
import ArticleBox from '../../Components/Main/ArticleBox/ArticleBox';
import GoalBox from '../../Components/Main/GoalBox/GoalBoxItem';
import GoalBoxs from '../../Components/Main/GoalBox/GoalBoxs';
import CourseBoxs from '../../Components/CourseBox/CourseBoxs';

function MainPage() {

    return (
        <>
            <Banner />
            <Container>
                <CourseBoxs />
                <GoalBoxs />
                <ArticleBox />
            </Container>
        </>
    )
}

export default MainPage;
import React, { useState } from 'react'
import Banner from '../../Components/Main/Banner/Banner';
import { Container } from 'react-bootstrap';
import ArticleBox from '../../Components/Main/ArticleBox/ArticleBox';
import GoalBoxs from '../../Components/Main/GoalBox/GoalBoxs';
import CourseBoxs from '../../Components/CourseBox/CourseBoxs';
import CommentTextArea from '../../Components/CommentTextArea/CommentTextArea';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';


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
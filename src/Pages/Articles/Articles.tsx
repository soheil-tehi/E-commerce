import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import ArticleBoxItem from '../../Components/Main/ArticleBox/ArticleBoxItem/ArticleBoxItem';
// import logoImg from '../../../Asset/Images/logo.png';
import logoImg from '../../Asset/Images/logo.png';
import './Articles.css';

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    return (
        <>
            <Container>
                <Row>
                    {
                        articles.length != 0 &&
                        articles.map((article: any) => (
                            <Fragment key={article.id} >
                                <Col sm={12} md={6} lg={4}>
                                    <Link className='course-box-link' to={`/articles/${article.id}`}>
                                        <ArticleBoxItem
                                            src={logoImg}
                                            alt={article.id}
                                            title={article.title}
                                            description={article.body}
                                        />
                                    </Link>
                                </Col>
                            </Fragment>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Articles
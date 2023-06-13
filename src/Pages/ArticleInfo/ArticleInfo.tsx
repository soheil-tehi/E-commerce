

import React from 'react'
import MiniMenu from '../../Components/ArticlePage/MiniMenu/MiniMenu'
import { Col, Container, Row } from 'react-bootstrap'
import LastArticles from '../../Components/ArticlePage/LastArticles/LastArticles'

function ArticleInfo() {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12} md={9}>
                        <h1>Article info</h1>
                        <div >
                            <h2>بازی های ساخته شده با پایتون</h2>
                            <img style={{ width: "100%" }} src="https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg" alt="" />
                            <p>پایتون یه دره و هزار تا دروازه، یکی از اون دروازه ها ساخت بازی هست! چرا بزرگ ترین شرکت های بازی سازی مثل Electronic Art نسخه های اولیه بازی هاشونو با پایتون ساختن؟ بنظر من تنها دلیل اینه که بهترین بازی های ساخته شده با پایتون هست، از فیفا و بتلفیلد 2 گرفته تا بازی های بچگونه.
                                قبل از اینکه بریم سراغ بازی های ساخته شده با پایتون، یه سوال پیش میاد که چرا پایتون برای ساخت بازی؟
                                اول راه باشید یا وسطای راه، میتونید روی پایتون حساب کنید، پایتون اونقدر کتابخونه های زیاد و رایگانی داره که شما نخواد نگران سختی کار شید و آموزش پایتون  رو برای شما خیلی جذاب تر میکنه . درسته، هرکاری سختی خودش رو داره؛ پس بریم ببینیم چه بازی هایی با پایتون ساخته شدن تا بفهمیم ارزشش رو داره این سختی یا نه.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <MiniMenu />
                        <LastArticles />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ArticleInfo
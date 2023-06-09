import React from 'react'
import GoalBox from './GoalBoxItem'
import { Col, Row } from 'react-bootstrap'
import GoalBoxItem from './GoalBoxItem'
import CoursesHeader from '../../CoursesHeader/CoursesHeader'


const goadData = [
    { id: 1, title: "دوره های اختصاصی", desc: "با پشتیبانی و کیفیت بالا ارائه میده !" },
    { id: 1, title: "اجازه تدریس", desc: "به هر مدرسی رو نمیده. چون کیفیت براش مهمه !" },
    { id: 1, title: "دوره پولی و رایگان", desc: "براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده" },
    { id: 1, title: "اهمیت به کاربر", desc: "اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست" },
]


function GoalBoxs() {
    return (
        <>
            <CoursesHeader
                title={"ما چه کمکی بهتون میکنیم؟"}
                desc={"از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"}
                linkTitle={""}
            />
            <Row>
                {
                    goadData.map(item => (
                        <Col xs={6}>
                            <GoalBoxItem
                                title={item.title}
                                desc={item.desc}
                            />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default GoalBoxs
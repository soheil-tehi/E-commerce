import React, { memo } from 'react'
import ArticleBoxItem from './ArticleBoxItem/ArticleBoxItem';
import articleImg1 from '../../../Asset/Images/ArticleBox/articleBox-1.jpg';
import articleImg2 from '../../../Asset/Images/ArticleBox/articleBox-2.png';
import articleImg3 from '../../../Asset/Images/ArticleBox/articleBox-3.jpg';
import { Row } from 'react-bootstrap';
import CoursesHeader from '../../CoursesHeader/CoursesHeader';

interface ArticaleBoxItemType {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
}

const articaleBoxItems: ArticaleBoxItemType[] = [
    {
        id: 1,
        src: articleImg1,
        alt: 'articleImg1',
        title: 'آموزش ری اکت',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است ',
    },
    {
        id: 2,
        src: articleImg2,
        alt: 'articleImg2',
        title: 'نحوه نصب کتابخانه در ری اکت',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه',
    },
    {
        id: 3,
        src: articleImg3,
        alt: 'سریع یاد بگیر',
        title: 'نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'
    },
]

const ArticleBox = memo(function ArticleBox() {

    return (
        <>
            <CoursesHeader
                title={"جدیدترین مقاله ها"}
                desc={"پیش به سوی ارتقای دانش"}
                linkTitle={"تمامی مقالات"}
            />
            <section className='py-5'>
                <div className="container flexBasic">
                    <Row>
                        {
                            articaleBoxItems.map((item: ArticaleBoxItemType) => (
                                <ArticleBoxItem key={item.id} {...item} />
                            ))
                        }
                    </Row>
                </div>
            </section>
        </>
    )
});

export default ArticleBox;
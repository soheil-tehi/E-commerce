import React, { memo } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import HeadLineAccordionItem from './HeadLineAccordionItem/HeadLineAccordionItem';

const headLineAccordionItemsData = [
    {
        id: 1,
        title: 'بخش آغازین دوره دارت',
        descriptionsList: [
            {
                descId: 1,
                descTitle: 'مدرس دوره کیست؟'
            },
            {
                descId: 2,
                descTitle: 'بهترین روش برای یادگیری برنامه نویسی'
            },
            {
                descId: 3,
                descTitle: 'آموزش نصب ویژوال استودیو کد'
            },
        ]
    },
    {
        id: 2,
        title: 'شرط و حلقه های تکرار در دارت',
        descriptionsList: [
            {
                descId: 1,
                descTitle: 'مدرس دوره کیست؟'
            },
            {
                descId: 2,
                descTitle: 'بهترین روش برای یادگیری برنامه نویسی'
            },
            {
                descId: 3,
                descTitle: 'آموزش نصب ویژوال استودیو کد'
            },
        ]
    },
    {
        id: 3,
        title: 'آموزش ساختار داده‌ها در دارت',
        descriptionsList: [
            {
                descId: 1,
                descTitle: 'مدرس دوره کیست؟'
            },
            {
                descId: 2,
                descTitle: 'بهترین روش برای یادگیری برنامه نویسی'
            },
            {
                descId: 3,
                descTitle: 'آموزش نصب ویژوال استودیو کد'
            },
        ]
    },
]

const HeadLineAccordion = memo(function HeadLineAccordion() {

    return (
        <Accordion defaultActiveKey="0">
            {
                headLineAccordionItemsData.map(item => (
                    <HeadLineAccordionItem key={item.id} eventKey={item.id} {...item} />
                ))
            }
        </Accordion>
    );
});

export default HeadLineAccordion;
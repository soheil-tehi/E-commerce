import React, { memo } from 'react';
import Jumbotron from '../../../Jumbotron/Jumbotron';
import './productInfoContentHeadline.css';
import HeadLineAccordion from './HeadLineAccordion/HeadLineAccordion';

const ProductInfoContentHeadline = memo(function ProductInfoContentHeadline() {

    return (
        <section id='Headline' className='content-Description text-start mt-5 mb-3'>
            <Jumbotron >
                <h1> سر فصل ها </h1>
                <HeadLineAccordion />
            </Jumbotron>
        </section>
    )
})

export default ProductInfoContentHeadline;
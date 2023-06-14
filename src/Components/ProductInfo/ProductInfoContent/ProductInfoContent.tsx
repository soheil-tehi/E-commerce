import React, { memo } from 'react';
import ProductInfoContentVideo from './ProductInfoContentVideo/ProductInfoContentVideo';
import ProductInfoContentHeader from './ProductInfoContentHeader/ProductInfoContentHeader';
import ProductInfoContentDescription from './ProductInfoContentDescription/ProductInfoContentDescription';
import ProductInfoContentHeadline from './ProductInfoContentHeadline/ProductInfoContentHeadline';
import ProductInfoContentFAQ from './ProductInfoContentFAQ/ProductInfoContentFAQ';
import './productInfoContent.css';

const ProductInfoMain = memo(function ProductInfoMain() {

    return (
        <section >
            <ProductInfoContentVideo />
            <ProductInfoContentHeader />
            <ProductInfoContentDescription />
            <ProductInfoContentHeadline />
            <ProductInfoContentFAQ />
        </section>
    )
})

export default ProductInfoMain;
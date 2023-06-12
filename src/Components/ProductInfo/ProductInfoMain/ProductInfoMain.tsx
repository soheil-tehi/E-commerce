import React, { memo } from 'react';
import ProductInfoVideo from './ProductInfoVideo/ProductInfoVideo';
import './productInfoMain.css';

const ProductInfoMain = memo(function ProductInfoMain() {

    return (
        <section >
            <ProductInfoVideo />
        </section>
    )
})

export default ProductInfoMain;
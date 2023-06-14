import React, { memo } from 'react';
import './productInfoContentHeader.css';

const ProductInfoContentHeader = memo(function ProductInfoContentHeader() {

    return (
        <div className='content-header'>
            <ul>
                <li><a href="#Description"> توضیحات </a></li>
                <li><a href="#Headline"> سر فصلها </a></li>
                <li><a href="#FAQ"> سوالات متداول </a></li>
                <li><a href="#"> محصولات مرتبط </a></li>
                <li><a href="#"> نقد و بررسی ها </a></li>
            </ul>
        </div>
    )
})

export default ProductInfoContentHeader;
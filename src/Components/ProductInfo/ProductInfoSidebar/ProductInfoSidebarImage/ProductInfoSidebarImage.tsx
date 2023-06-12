import React, { memo } from 'react';
import javaScriptImg from '../../../../Asset/Images/ProductsInfo/javaScript.png' ;
import './productInfoSidebarImage.css';

const ProductInfoSidebarImage = memo(function ProductInfoSidebarImage() {

    return (
        <figure className='info-figure'>
            <img src={javaScriptImg} alt="javaScriptImg" />
        </figure>
    )
})

export default ProductInfoSidebarImage;
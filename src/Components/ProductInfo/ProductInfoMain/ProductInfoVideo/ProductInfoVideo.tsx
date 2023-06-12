import React, { memo } from 'react';
import VideoTitle from '../../../../Asset/Images/ProductsInfo/video-img.png';
import './productInfoVideo.css';

const ProductInfoVideo = memo(function ProductInfoVideo() {

    return (
        <figure className="info-video">
            <video controls poster={VideoTitle}>
                <source src='#' type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
        </figure>
    )
})

export default ProductInfoVideo;
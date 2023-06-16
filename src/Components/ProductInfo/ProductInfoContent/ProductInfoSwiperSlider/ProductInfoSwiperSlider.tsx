import { memo } from 'react';
import Jumbotron from '../../../Jumbotron/Jumbotron';
import InfoSwiperSlider from './InfoSwiperSlider/InfoSwiperSlider';
import "./productInfoSwiperSlider.css";

const ProductInfoSwiperSlider = memo(function ProductInfoSwiperSlider() {

    return (
        <section id='RelatedVideos' className='my-5'>
            <Jumbotron>
                <h2 className='text-start'> ویدئو های مرتبط </h2>
                <InfoSwiperSlider />
            </Jumbotron>
        </section>
    )
})

export default ProductInfoSwiperSlider;
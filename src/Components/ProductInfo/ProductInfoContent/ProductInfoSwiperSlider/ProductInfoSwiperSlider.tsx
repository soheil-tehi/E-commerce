import { memo } from 'react';
import Jumbotron from '../../../Jumbotron/Jumbotron';
import InfoSwiperSlider from './InfoSwiperSlider/InfoSwiperSlider';
import "./productInfoSwiperSlider.css";

const ProductInfoSwiperSlider = memo(function ProductInfoSwiperSlider() {

    return (
        <section id='RelatedVideos' className='my-5'>
            <Jumbotron className='px-0 pb-0'>
                <h2 className='text-start px-5'> ویدئو های مرتبط </h2>
                <InfoSwiperSlider />
            </Jumbotron>
        </section>
    )
})

export default ProductInfoSwiperSlider;
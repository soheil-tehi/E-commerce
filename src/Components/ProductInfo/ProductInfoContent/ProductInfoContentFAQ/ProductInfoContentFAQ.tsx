import React, { memo } from 'react';
import Jumbotron from '../../../Jumbotron/Jumbotron';
import AccordionFAQ from '../../../Accordions/AccordionFAQ';
import Button from '../../../Button/Button';
import { AiOutlineMail } from 'react-icons/ai';

const ProductInfoContentFAQ = memo(function ProductInfoContentFAQ() {

    return (
        <section id='FAQ'>
            <Jumbotron>
                <AccordionFAQ />
                <div className='flexBasic mt-3'>
                    <h5 className='fw-bold'> سوال شما وجود نداشت؟ </h5>
                    <Button variant='outlined' className='flexBasic w-25 py-3 px-3'>
                        تماس با ما
                        <AiOutlineMail />
                    </Button>
                </div>
            </Jumbotron>
        </section>
    )
})

export default ProductInfoContentFAQ;
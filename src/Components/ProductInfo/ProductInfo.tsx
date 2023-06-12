import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductInfoSidebar from './ProductInfoSidebar/ProductInfoSidebar';
import ProductInfoMain from './ProductInfoMain/ProductInfoMain';

const ProductInfo = memo(function ProductInfo() {

    return (
        <section className='container my-5'>
            <Row>
                 <Col md={4} lg={4} >
                     <ProductInfoSidebar />
                 </Col>
                 <Col md={8} lg={8} >
                     <ProductInfoMain />
                 </Col>
            </Row>
        </section>
    )
})

export default ProductInfo;
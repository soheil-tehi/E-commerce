import React, { ReactNode, memo } from 'react'
import { Col } from 'react-bootstrap';

interface BannerItemProps {
    icon: ReactNode;
    title: string;
}

const BannerItem = memo(function BannerItem({ icon, title }: BannerItemProps) {

    return (
        <Col xs={6} sm={6} md={4} className='mb-3'>
            {icon}
            <p> {title} </p>
        </Col>
    )
})

export default BannerItem;
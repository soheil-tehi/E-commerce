import React from 'react';
import Button from '../../../Button/Button';
import EllipsisPraghraph from '../../../EllipsisPraghraph/EllipsisPraghraph';
import { Col } from 'react-bootstrap';
import './articleBoxItem.css';

interface ArticleBoxItemProps {
    src: string;
    description: string;
    title: string;
    alt?: string;
}

const ArticleBoxItem = React.memo(function ArticleBoxItem({ src, alt, title, description }: ArticleBoxItemProps) {
    return (
        // <Col xs={12} sm={12} md={6} lg={4}>
        <article className='article-box-item borderBasic'>
            <div>
                <a href="#" target='_blank'>
                    <img src={src} alt={alt} />
                </a>
            </div>
            <div className='article-box-item-content px-3'>
                <h5 className='text-end'>
                    <a href="#" target='_blank'>
                        {title}
                    </a>
                </h5>
                <EllipsisPraghraph>
                    {description}
                </EllipsisPraghraph>
                <Button variant='outlined' className='d-block w-50' href='#'>
                    بیشتر بخوانید
                </Button>
            </div>
        </article>
        // </Col>
    );
})

export default ArticleBoxItem;
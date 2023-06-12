import React, { ReactNode, memo } from 'react';
import { FiUser } from 'react-icons/fi';
import Button from '../../../Button/Button';
import './productInfoSidebarDetail.css';

interface InfoDetailDataViewModel {
    id: number;
    icon: ReactNode;
    title: string;
    value: string;
}

const infoDetailData: InfoDetailDataViewModel[] = [
    {
        id: 1,
        icon: <FiUser />,
        title: 'مدرس دوره',
        value: 'سروش طهرانی',
    },
    {
        id: 2,
        icon: <FiUser />,
        title: 'زمان کل آموزش',
        value: '2 ساعت',
    },
    {
        id: 3,
        icon: <FiUser />,
        title: 'مدرس دوره',
        value: 'سروش طهرانی',
    },
    {
        id: 4,
        icon: <FiUser />,
        title: 'مدرس دوره',
        value: 'سروش طهرانی',
    },
    {
        id: 5,
        icon: <FiUser />,
        title: 'مدرس دوره',
        value: 'سروش طهرانی',
    },
    {
        id: 6,
        icon: <FiUser />,
        title: 'مدرس دوره',
        value: 'سروش طهرانی',
    },
    {
        id: 7,
        icon: <FiUser />,
        title: 'مدرس دوره',
        value: 'سروش طهرانی',
    },
    {
        id: 8,
        icon: <FiUser />,
        title: 'مدرس دوره',
        value: 'سروش طهرانی',
    },
    {
        id: 9,
        icon: <FiUser />,
        title: 'قیمت دوره',
        value: '899.000 تومان',
    },
]

const ProductInfoSidebarDetail = memo(function ProductInfoSidebarDetail() {

    return (
        <div className='info-details my-4'>
            <ul>
                {
                    infoDetailData.map((item: InfoDetailDataViewModel) => (
                        <li key={item.id}>
                            <em>{item.icon}{item.title}</em><span>{item.value}</span>
                        </li>

                    ))
                }
            </ul>
            <Button variant='contained' className='d-flex justify-content-between align-items-center mt-3 py-3 px-4 w-75 mx-auto'>
                افزودن به سبد خرید
                <FiUser />
            </Button>
        </div>
    )
})

export default ProductInfoSidebarDetail;
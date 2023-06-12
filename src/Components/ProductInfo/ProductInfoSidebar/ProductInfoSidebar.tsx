import React, { memo } from 'react';
import ProductInfoSidebarImage from './ProductInfoSidebarImage/ProductInfoSidebarImage';
import ProductInfoSidebarDetail from './ProductInfoSidebarDetail/ProductInfoSidebarDetail';

const FrontProductAsid = memo(function FrontProductAsid() {

    return (
        <div >
            <ProductInfoSidebarImage />
            <ProductInfoSidebarDetail />
        </div>
    )
})

export default FrontProductAsid;
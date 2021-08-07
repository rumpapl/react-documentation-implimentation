import React from 'react';
import ProductLayout from './ProductLayout';

const Product = (props) => {
    return (
        <ProductLayout>
            <h3>{props.product.title}</h3>
            <h4>{props.product.type}</h4>
            <span>{props.product.description}</span>
        </ProductLayout>
    )
}

export default Product

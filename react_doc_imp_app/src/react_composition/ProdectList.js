import React from 'react';
import { products } from './data';
import Product from './Product';

const ProdectList = (props) => {
    return (
        <>
            {props.top}
            {products.map((product) =>
                <Product key={product.id} product={product} />
            )}

            {props.buttom}
        </>
    )
}

export default ProdectList

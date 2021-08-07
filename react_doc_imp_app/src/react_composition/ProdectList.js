import React from 'react';
import { products } from './data';
import Product from './Product';

const ProdectList = () => {
    return (
        <>
            {products.map((product) =>
                <Product key={product.id} product={product} />
            )}
        </>
    )
}

export default ProdectList

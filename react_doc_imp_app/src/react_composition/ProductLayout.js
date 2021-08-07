import React from 'react';
import './style.css';
import '../globalStyle.css';

const ProductLayout = (props) => {
    return (
        <div className={'product_box ' + props.bg_color}>
            {props.children}
        </div>
    )
}

export default ProductLayout

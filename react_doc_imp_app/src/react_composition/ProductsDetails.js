import React from 'react';
import ProdectList from './ProdectList';
import TopComp from './TopComp';
import ButtomComp from './ButtomComp';

const ProductsDetails = () => {
    const [name, setName] = React.useState('')

    function handleChange(event) {
        setName(event.target.value);
        event.preventDefault();
        console.log('on handle change');
    }

    function handleClick() {
        console.log('On handle click');
    }

    return (

        <ProdectList top={<TopComp title="Top Component" />} buttom={<ButtomComp title='Buttom Component' />}>
            <h1>On Product Details page </h1>
            <input type='text' value={name} placeholder='enter name' onChange={handleChange} />
            &nbsp;&nbsp;
            <button onClick={handleClick}>click</button>
            <h4>children end here!</h4>
        </ProdectList>
    )
}

export default ProductsDetails

import React from 'react';
import '../../styles/UI/Cart.css';

const Cart = (props) => {
    const clasess = 'cart ' + props.className;
    return <div className={clasess}>{props.children}</div>;
    
};

export default Cart;
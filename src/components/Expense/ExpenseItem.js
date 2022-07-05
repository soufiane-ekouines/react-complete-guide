import React, { useState } from 'react';
import '../../styles/Expense/ExpenseItem.css'
import Cart from '../UI/Cart';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    //function click handler
    const [ title, settitle ] = useState(props.item.title);
    const clickHandler = () => {
        settitle('hello wii');
    }
    return (
        <Cart className='expenseitem'>
            <ExpenseDate date={props.item.date} />
            <div className='expenseitem_desciption'>
                <h2>{title}</h2>
                <div className='expenseitem_price'>$ {props.item.amount}</div>
                <button onClick={clickHandler}>Change the title</button>
            </div>
        </Cart>
    );
};

export default ExpenseItem;
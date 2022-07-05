import React, { useState } from 'react';
import Cart from '../UI/Cart';
import ExpenseItem from './ExpenseItem';
import '../../styles/Expense/Expenses.css';
import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) => {
    const [data,setdata] = useState(props.expens);
    const [date,setdate] = useState("2022");

    const list = data.map((expens) => 
        <ExpenseItem key={expens.id} item={expens} />
    )
    const Fillter = (date) => {
        setdate(date);
      }
    return (
        <Cart className="expenses">
      <ExpensesFilter defauledate={date} onFillter={Fillter}/>

            {list}
            {/* <ExpenseItem item={props.expens[0]} />
            <ExpenseItem item={props.expens[1]} />
            <ExpenseItem item={props.expens[2]} />
            <ExpenseItem item={props.expens[3]} /> */}
        </Cart>
    );
};

export default Expenses;
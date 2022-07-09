import React, { useState } from 'react';
import Cart from '../UI/Cart';
import ExpenseItem from './ExpenseItem';
import '../../styles/Expense/Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesListe from './ExpensesListe';
const Expenses = (props) => {
    const [date, setdate] = useState("2022");
    const Fillterdata = props.expens.filter((item) =>{ return item.date.getFullYear().toString() === date});
    const Fillter = (date) => {
        setdate(date);
    }
    return (
        <Cart className="expenses">
            <ExpensesFilter defauledate={date} onFillter={Fillter} />
            <ExpensesListe item={Fillterdata} />
          
        </Cart>
    );
};

export default Expenses;
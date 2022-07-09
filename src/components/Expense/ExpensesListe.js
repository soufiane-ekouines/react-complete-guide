import React from 'react';
import '../../styles/Expense/ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesListe = (props) => {
    if (props.item.length == 0) {
        return <p className='expenses-list__fallback'>No content found</p>;
    }
    return (
        <ul className='expenses-list'>
            {props.item.map((expens) =>
                <ExpenseItem key={expens.id} item={expens} />
            )}
        </ul>
    );
};

export default ExpensesListe;
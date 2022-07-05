import React from "react";
import '../../styles/Newexpense/Newexpense.css'
import Expenseform from "./Expenseform";

const Newexpense = (props) => {
    const SaveExpenseDataHandler = (entreExpenseData) => {
        const ExpenseData = {
            ...entreExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData);
    }
    return <div className="new-expense">
        <Expenseform onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
}

export default Newexpense;
import React, { useState } from "react";
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
    const [hide, sethide] = useState(true);
    const show = () => {
        sethide(false);
    }
    const Anuller = () => {
        sethide(true);
    }
    return <div className="new-expense">
      {hide && <button onClick={show}>Add New Expense</button>}
        {!hide && <Expenseform onSaveExpenseData={SaveExpenseDataHandler} OnAnuller={Anuller} />}
    </div>
}

export default Newexpense;
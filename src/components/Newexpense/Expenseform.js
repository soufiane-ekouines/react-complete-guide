import React, { useState } from 'react';
import '../../styles/Newexpense/Expenseform.css'

const Expenseform = ( props ) => {
    // const [title, settitle] = useState('');
    // const [amount, setamount] = useState('');
    // const [date, setdate] = useState('');
    const [TextInput,setTextInput]=useState({
        title:'',
        amount:'',
        date:''
    })
    const submitHandler =(event)=>{
        event.preventDefault();
        const extendata={
            title:TextInput.title,
            amount:TextInput.amount,
            date: new Date(TextInput.date)
        }
        props.onSaveExpenseData(extendata);
        setTextInput({
           title:'',
           amount:'',
           date:''
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={TextInput.title} onChange={(e) => { setTextInput({...TextInput,title:e.target.value,}) }} />
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type="number" value={TextInput.amount} min="0.01" step="0.01"  onChange={(e) => { setTextInput({...TextInput,amount:e.target.value,}) }}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={TextInput.date} min="2019-01-01" max="2022-07-02"  onChange={(e) => { setTextInput({...TextInput,date:e.target.value,}) }} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add expense </button>
            </div>
        </form>
    );
};

export default Expenseform;
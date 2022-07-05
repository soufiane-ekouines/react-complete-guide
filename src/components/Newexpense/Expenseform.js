import React, { useState } from 'react';
import '../../styles/Newexpense/Expenseform.css'

const Expenseform = ( props ) => {
    // const [entreTitle, setentreTitle] = useState('');
    // const [entrePrice, setentrePrice] = useState('');
    // const [entreDate, setentreDate] = useState('');
    const [TextInput,setTextInput]=useState({
        entreTitle:'',
        entrePrice:'',
        entreDate:''
    })
    const submitHandler =(event)=>{
        event.preventDefault();
        props.onSaveExpenseData(TextInput);
        setTextInput({
            entreTitle:'',
            entrePrice:'',
            entreDate:''
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={TextInput.entreTitle} onChange={(e) => { setTextInput({...TextInput,entreTitle:e.target.value,}) }} />
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type="number" value={TextInput.entrePrice} min="0.01" step="0.01"  onChange={(e) => { setTextInput({...TextInput,entrePrice:e.target.value,}) }}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={TextInput.entreDate} min="2019-01-01" max="2022-07-02"  onChange={(e) => { setTextInput({...TextInput,entreDate:e.target.value,}) }} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add expense </button>
            </div>
        </form>
    );
};

export default Expenseform;
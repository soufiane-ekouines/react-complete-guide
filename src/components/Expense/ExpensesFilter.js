import React from 'react';

import '../../styles/Expense/ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dates =
   [ '2022',
    '2021',
    '2020',
    '2019',]
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.date} onChange={(e) => props.onFillter(e.target.value)}>
          {dates.map((item)=>
          <option value={item}>{item}</option>
          )}

        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
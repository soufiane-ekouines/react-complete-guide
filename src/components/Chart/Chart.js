import React from 'react';
import ChartBar from './ChartBar';
import '../../styles/Chart/Chart.css';


const Chart = (props) => {
    const datavaluearray = props.dataPoints.map(item => item.value);
    const valuemax = Math.max(...datavaluearray);

    return (
        <div className='chart'>
            {props.dataPoints.map(item => <ChartBar key={item.label} value={item.value} maxvalue={valuemax} label={item.label} />)}
        </div>
    );
};

export default Chart;
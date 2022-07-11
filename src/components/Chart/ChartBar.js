import React from 'react';
import '../../styles/Chart/ChartBar.css'

const ChartBar = (props) => {
    let barvalue = '0%';
    if (props.maxvalue > 0) {
        barvalue = Math.round((props.value / props.maxvalue) * 100) + "%";
        console.log(barvalue)
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barvalue }}></div>
            </div>
            <div className='chart-bar__label'>
                {props.label}
            </div>
        </div>
    );
};

export default ChartBar;
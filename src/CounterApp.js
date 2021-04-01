import React, { useState }from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value = 10 }) => {
    const [ count, setCount ] = useState( value ); // :[]
    
    const addEventSum = (e) => {
        setCount( count + 1);
        // setCount( (c) => c + 1 );
    }
    const addEventReset = (e) => setCount( value );
    const addEventSubtract = (e) => count > 0 ? setCount( count - 1) : false;
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { count } </h2>
            <button onClick = { addEventSum }>+1</button>
            <button onClick = { addEventReset }>Reset</button>
            <button onClick = { addEventSubtract }>-1</button>
            {/* Otra forma de hacer el event si no pasamos un parametro*/}
            {/* <button onClick = { (e) => addEvent(e) }>+1</button> */}
        </>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number,
}

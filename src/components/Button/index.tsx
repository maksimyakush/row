import React from 'react';

const Button = ({ label, color = 'red' } : {label: string, color?: string}) => {
    return <button style={{color}}>{ label }</button>
}

export { Button };
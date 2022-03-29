import React from 'react';

const Item = ({ children, color='red' }) => {
    var q;


    return <li style={{backgroundColor: color}}>{ children }</li>
}

export { Item };
import React from 'react';

const MenuItem = ({ image, name, price }) => (
    <div className='menu-item'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name} </h1>
        <p> ${price}</p>
    </div>
);

export default MenuItem;

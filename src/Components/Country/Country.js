import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,region,population,name,flags}=props.country
    return (
        <div className='country'>
            <h2>Country Name:{name.common}</h2>
            <img src={flags.png}alt=""/>
            <h4>Population:{population}</h4>
            <h5>area:{area}</h5> 
            <h5>region:{region}</h5>
        </div>
    );
};

export default Country;
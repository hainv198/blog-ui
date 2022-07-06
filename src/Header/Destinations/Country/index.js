import React, {useEffect, useState} from 'react';
import './style.scss'
import {Link} from "react-router-dom";
const Country = ({data}) => {
    const [countrys, setCountrys] = useState([])
    useEffect(() => {
        setCountrys(data.data.country)
    },[data])
    return (
        <div className='wrappers row'>
            <ul className='country col-md-3'>
                {countrys.map((item) => (
                    <Link to={'/categories/'+item} style={{color: "inherit", textDecoration: "none"}}>
                    <p key={item.id}>{item}</p>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Country;
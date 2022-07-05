import React, {useEffect, useState} from 'react';
import './style.scss'
const Country = ({data}) => {
    const [countrys, setCountrys] = useState([])
    useEffect(() => {
        setCountrys(data.data.country)
        console.log(data)
    },[data])
    return (
        <div className='wrappers row'>
            <ul className='country col-md-3'>
                {countrys.map((item) => (
                    <p key={item.id}>{item}</p>
                ))}
            </ul>
        </div>
    );
};

export default Country;
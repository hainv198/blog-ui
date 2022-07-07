import React, {useEffect, useState} from 'react';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Suggestions = ({data}) => {
    const [set1, setSet1]= useState([])
    useEffect(() => {
        setSet1(data.sub_tag)
    },[data])
    console.log(data.sub_tag);
    const country = set1.find((item) => <h1>{item.id}</h1>);
    console.log(country)
    return (
        <div className='wrappers'>
            <button className='btn-search'><PersonSearchIcon/></button>
            <div className="info">
                <p className="name">
                    {data.tags !== null && (
                        // <span>{data.sub_tag}</span>
                        <span>{country}</span>
                    )}
                    {/*{data.status === true && (*/}
                    {/*    <FiberManualRecordIcon/>*/}
                    {/*)}*/}
                </p>
            </div>
        </div>
    );
};

export default Suggestions;
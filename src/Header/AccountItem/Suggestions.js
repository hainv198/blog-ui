import React from 'react';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Suggestions = ({data}) => {
    return (
        <div className='wrappers'>
            <button className='btn-search'><PersonSearchIcon/></button>
            <div className="info">
                <p className="name">
                    {data.loading !== null && (
                        <span>{data.loading}</span>
                    )}
                    {data.status === true && (
                        <FiberManualRecordIcon/>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Suggestions;
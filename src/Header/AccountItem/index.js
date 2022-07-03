import React from 'react';
import './AccountItem.scss'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const AccountItem = ({data}) => {
    return (
        <div className='wrappers'>
            <img className='avatar' src={data.avatar} alt={data.firstName}/>
            <div className="info">
                <p className="name">
                    <span>{data.nickname}</span>
                    {data.status === true && (
                        <FiberManualRecordIcon/>
                    )}
                </p>
                <span className="username">{data.firstName}</span>
            </div>
        </div>
    );
};

export default AccountItem;
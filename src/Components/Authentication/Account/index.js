import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {UserAuth} from "../../../Context/AuthContext";

const Account = ({status}) => {
    // const[currentUser, setCurrentUser] = useState(status)
    // useEffect(() => {
    //     setCurrentUser(false)
    // },)
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div style={{marginTop:100}}>

            <p>{user && user.email}</p>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Account;
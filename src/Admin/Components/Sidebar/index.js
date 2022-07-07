import React from 'react';
import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarBorder from '@mui/icons-material/StarBorder';
import {Link, useNavigate} from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import {Outlet} from "react-router";
import {UserAuth} from "../../../Context/AuthContext";
import {ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
const Sidebar = () => {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
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


        <div className="sidebar ">
            {/*<div className="top">*/}
            {/*    <Link to="/" style={{ textDecoration: "none" }}>*/}
            {/*        <span className="logo">lamadmin</span>*/}
            {/*    </Link>*/}
            {/*</div>*/}

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/admin/home" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className="title">LISTS</p>
                    <Link to="/admin/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <List sx={{ width: '100%' }}>

                        <ListItemButton
                            sx={{ padding:'3px 3px'}}
                            onClick={handleClick}>
                            <ListItemIcon sx={{  minWidth:29}}>
                                <InboxIcon sx={{  color:'#7451f8',fontSize:'2.2rem'}}/>
                            </ListItemIcon>
                            <ListItemText
                                sx={{ paddingLeft:0}}
                                primary={<h4 style={{fontWeight:"bold",color:'#888', fontSize:'1.6rem'}}>Profile</h4>}
                                inset
                            />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={!open} timeout="auto" unmountOnExit >
                            <List  disablePadding>
                                <ListItemButton
                                    sx={{ padding:'3px 3px',pl: 4}}
                                >
                                    <ListItemIcon sx={{  minWidth:29}}>
                                        <AccountCircleIcon sx={{  color:'#7451f8',fontSize:'2.2rem'}} />
                                    </ListItemIcon>
                                    <ListItemText
                                        sx={{ paddingRight:0}}
                                        primary={<h4 style={{fontWeight:"bold",color:'#888', fontSize:'1.6rem'}}>{user && user.email}</h4>}/>
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <button
                            style={{fontWeight: 'bold',
                                color: 'rgb(136, 136, 136)',
                                fontSize: '1.6rem',
                                background:"transparent"
                        }}
                            onClick={handleLogout}>
                            Logout
                        </button>
                    </li>

                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    // onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    // onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>

        </div>
    );
};

export default Sidebar;

// <Tippy
//     content={<span>Upload</span>}>
//     <span><CloudUploadIcon/></span>
// </Tippy>
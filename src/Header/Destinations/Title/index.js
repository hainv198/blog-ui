import React from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import '../Country/style.scss'
import Country from "../Country";
import {Link} from "react-router-dom";
const Title = ({data}) => {
    return (
        <div>
            <div className='continents'>
                <Link to={"/categories/" + data.data.continent}>
                <span>{data.data.continent}<ArrowForwardIosIcon/></span>
                </Link>
            </div>

            <Country data={data}/>

        </div>
    );
};

export default Title;
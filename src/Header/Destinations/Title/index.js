import React from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import '../Country/style.scss'
import Country from "../Country";
const Title = ({data}) => {
    return (
        <div>
            <div className='continents'>
                <span>{data.data.continent}<ArrowForwardIosIcon/></span>
            </div>
            <Country data={data}/>
        </div>
    );
};

export default Title;
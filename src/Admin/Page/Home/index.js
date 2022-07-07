
import "./Home.scss";
import Sidebar from "../../Components/Sidebar";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured";
import Chart from "../../Components/Chart";
import List from "../../Components/Table";
import {useState} from "react";

    const HomeAdmin = () => {
        const [dark, setDark] = useState(false)
    return (
        <div className={dark ? 'app dark' : 'dark'}>
            <div className="home ">
                <Sidebar setDark={setDark} />

                <div className="homeContainer">
                    <div className="widgets">
                        <Widget type="user" />
                        <Widget type="order" />
                        <Widget type="earning" />
                        <Widget type="balance" />
                    </div>
                    <div className="charts">
                        <Featured />
                        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                    </div>
                    <div className="listContainer">
                        <div className="listTitle">Latest Transactions</div>
                        <List/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeAdmin;
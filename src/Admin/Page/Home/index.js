
import "./Home.scss";
import Sidebar from "../../Components/Sidebar";
import NavBar from "../../Components/Navbar";
import Widget from "../../Components/Widget/Widget";
import Featured from "../../Components/Featured";
import Chart from "../../Components/Chart";
import Table from "../../Components/Chart";
import List from "../../Components/Table";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

    const HomeAdmin = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                {/*container*/}
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
    );
};

export default HomeAdmin;
import "./dashboard.scss"
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navigation/nav"
import Widget from "../../components/Widgets/widget"
import Featured from "../../components/Featured/featured";
import Chart from "../../components/Chart/chart";
import Table from "../../components/Table/table";

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='dashContainer'>
                <Navbar />
                <div className='widgets'>
                    <Widget type="rabbit" />
                    <Widget type="orders" />
                    <Widget type="kits" />
                    <Widget type="income" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="orderContainer">
                    <div className="orderTitle">Latest Orders</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
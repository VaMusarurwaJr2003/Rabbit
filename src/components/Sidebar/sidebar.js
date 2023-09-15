import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'
import { DarkModeContext } from "../Context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Pauri <span>Farm</span></span>
            </div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <Link to={'/'} style={{ textDecoration: "none" }} > <span>Dashboard</span></Link>
                    </li>

                    <p className="title">DATA</p>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Suppliers</span>
                    </li>
                    <li>
                        <AssignmentIndIcon className="icon" />
                        <span>Customers</span>
                    </li>
                    <li>
                        <Inventory2Icon className="icon" />
                        <Link to={'/management'} style={{ textDecoration: "none" }} ><span>Management</span></Link>
                    </li>
                    <li>
                        <PaymentIcon className="icon" />
                        <span>Orders</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}>
                </div>

                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
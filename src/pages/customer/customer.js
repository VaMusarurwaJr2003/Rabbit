import "./customer.scss"
import Sidebar from "../../components/Sidebar/sidebar"
import Navbar from "../../components/Navigation/nav"
import Datatable from "../../components/Datatable/datatable"

const Customer = () => {
    return (
        <div className="customer">
            <Sidebar />
            <div className="customerContainer">
                <Navbar />
                <Datatable />
            </div>
        </div>
    )
}

export default Customer
import './management.scss'
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navigation/nav"
import Manage from "../../components/ManagementWidgets/manage"


const Management = () => {
    return (
        <div className='management'>
            <Sidebar />
            <div className='managementContainer'>
                <Navbar />

                <div className='manages'>
                    <Manage type="rabbits" />
                    <Manage type="mating" />
                    <Manage type="breeding" />
                    <Manage type="medication" />
                    <Manage type="cage" />
                </div>
            </div>
        </div>
    )
}

export default Management
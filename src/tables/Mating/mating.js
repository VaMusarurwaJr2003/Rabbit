import "./mating.scss"
import Sidebar from "../../components/Sidebar/sidebar"
import Navbar from "../../components/Navigation/nav"
import Matingtable from "../../components/MatingTable/matingtable"

const Mating = () => {
    return (
        <div className="mating">
            <Sidebar />
            <div className="matingContainer">
                <Navbar />
                <Matingtable />
            </div>
        </div>
    )
}

export default Mating
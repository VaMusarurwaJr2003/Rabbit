import "./cage.scss"
import Sidebar from "../../components/Sidebar/sidebar"
import Navbar from "../../components/Navigation/nav"
import Cagetable from "../../components/CageTable/cagetable"

const Cage = () => {
    return (
        <div className="cage">
            <Sidebar />
            <div className="cageContainer">
                <Navbar />
                <Cagetable />
            </div>
        </div>
    )
}

export default Cage
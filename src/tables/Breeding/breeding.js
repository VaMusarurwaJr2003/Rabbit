import "./breeding.scss"
import Sidebar from "../../components/Sidebar/sidebar"
import Navbar from "../../components/Navigation/nav"
import Breedingtable from "../../components/BreedingTable/breedingtable"

const Breeding = () => {
    return (
        <div className="breeding">
            <Sidebar />
            <div className="breedingContainer">
                <Navbar />
                <Breedingtable />
            </div>
        </div>
    )
}

export default Breeding
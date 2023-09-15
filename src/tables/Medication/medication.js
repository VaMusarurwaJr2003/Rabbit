import "./medication.scss"
import Sidebar from "../../components/Sidebar/sidebar"
import Navbar from "../../components/Navigation/nav"
import Medicationtable from "../../components/MedicationTable/medicationtable"

const Medication = () => {
    return (
        <div className="medication">
            <Sidebar />
            <div className="medicationContainer">
                <Navbar />
                <Medicationtable />
            </div>
        </div>
    )
}

export default Medication
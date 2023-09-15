import "./rabbit.scss"
import Sidebar from "../../components/Sidebar/sidebar"
import Navbar from "../../components/Navigation/nav"
import Rabbittable from "../../components/RabbitTable/rabbittable"

const Rabbit = () => {
    return (
        <div className="rabbit">
            <Sidebar />
            <div className="rabbitContainer">
                <Navbar />
                <Rabbittable />
            </div>
        </div>
    )
}

export default Rabbit
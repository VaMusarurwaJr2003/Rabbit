import "./manage.scss"
import { Link } from 'react-router-dom'

const Manage = ({ type }) => {
    let data;

    switch (type) {
        case "rabbits":
            data = {
                title: <Link to='/management/rabbit' style={{ textDecoration: "none", color: "#62b4ff" }}>RABBITS</Link>,
            };
            break;

        case "mating":
            data = {
                title: <Link to={'/management/mating'} style={{ textDecoration: "none", color: "#62b4ff" }}>MATING</Link>,
            };
            break;

        case "breeding":
            data = {
                title: <Link to={'/management/breeding'} style={{ textDecoration: "none", color: "#62b4ff" }}>BREEDING</Link>,
            };
            break;

        case "medication":
            data = {
                title: <Link to={'/management/medication'} style={{ textDecoration: "none", color: "#62b4ff" }}>MEDICATION</Link>,
            };
            break;

        case "cage":
            data = {
                title: <Link to={'/management/cage'} style={{ textDecoration: "none", color: "#62b4ff" }}>CAGE</Link>,
            };
            break;
        default:
            break;
    }

    return (
            <div className='manage'>
                <div className="center">
                    <span className="title">
                        {data.title}
                    </span>
                </div>
            </div>
    )
}

export default Manage
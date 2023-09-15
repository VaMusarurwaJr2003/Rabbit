import './new.scss'
import Sidebar from "../../components/Sidebar/sidebar"
import Navbar from "../../components/Navigation/nav"
import customer from '../../assets/customer.png'


const New = () => {
    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                <div className='top'>
                    <h1>Add New Customer</h1>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <img src={customer} alt='customer' />
                    </div>
                    <div className='right'>
                        <form>
                            <div className='formInput'>
                                <label>Username</label>
                                <input type='text' placeholder='username' />
                            </div>

                            <div className='formInput'>
                                <label>Username</label>
                                <input type='text' placeholder='username' />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default New
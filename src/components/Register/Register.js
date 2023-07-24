import React, { useState } from 'react'
import './Register.css'
import '../../App.scss'
import client from '../../LoginAssets/client.jpeg';
import rabbit from '../../LoginAssets/rabbit.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';
import Axios from 'axios'

const Register = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigateTo = useNavigate()

    //onclick let us get what the user haS ENTERED
    const createUser = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3002/register', {
            Email: email,
            userName: userName,
            Password: password

        }).then(() => {
            //on register redirect to login
            navigateTo('/login')

            //clearing the fields
            setEmail('')
            setUserName('')
            setPassword('')

        })
    }
    return (
        <div className='registerPage flex'>
            <div className='container flex'>
                <div className='imageDiv'>
                    <img src={client} alt='client' />
                    <div className='textDiv'>
                        <h2 className='title'>Even the Smallest one can Change the World.</h2>
                        <p>We keep Extraordinary Breeds!</p>
                    </div>
                    <div className='footerDiv flex'>
                        <span className='text'>Have an Account?</span>
                        <Link to={'/login'}>
                            <button className='btn'>SignIn</button>
                        </Link>
                    </div>
                </div>

                <div className='formDiv flex'>
                    <div className='headerDiv'>
                        <img src={rabbit} alt='rabbit' />
                        <h3>Let Us Know You!</h3>
                    </div>
                    <form action='' className='form grid'>

                        <div className='inputDiv'>
                            <label htmlFor='email'>Email</label>
                            <div className='input flex'>
                                <MdMarkEmailRead className='icon' />
                                <input type='email'
                                    id='email'
                                    placeholder='Email'
                                    onChange={(event) => { setEmail(event.target.value) }}
                                />
                            </div>
                        </div>

                        <div className='inputDiv'>
                            <label htmlFor='username'>Username</label>
                            <div className='input flex'>
                                <FaUserShield className='icon' />
                                <input
                                    type='text'
                                    id='username'
                                    placeholder='Username'
                                    onChange={(event) => { setUserName(event.target.value) }}
                                />
                            </div>
                        </div>


                        <div className='inputDiv'>
                            <label htmlFor='password'>Password</label>
                            <div className='input flex'>
                                <BsFillShieldLockFill className='icon' />
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Password'
                                    onChange={(event) => { setPassword(event.target.value) }}
                                />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={createUser}>
                            Register
                            <AiOutlineSwapRight className='icon' />
                        </button>

                    </form>

                </div>

            </div>
        </div>
    )
}
export default Register;


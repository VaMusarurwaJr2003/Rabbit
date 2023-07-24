import React, { useEffect, useState } from 'react'
import './Login.css'
import '../../App.scss'
import client from '../../LoginAssets/client.jpeg';
import rabbit from '../../LoginAssets/rabbit.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import Axios from 'axios'

const Login = () => {

    const [loginuserName, setLoginUserName] = useState('')
    const [loginpassword, setLoginPassword] = useState('')
    const navigateTo = useNavigate()

    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setstatusHolder] = useState('message')


    const loginUser = (e) => {
        //preventing submit
        e.preventDefault()

        Axios.post('http://localhost:3002/login', {
            LoginuserName: loginuserName,
            LoginPassword: loginpassword

        }).then((response) => {
            console.log(response.data.message)

            if (response.data.message || loginuserName === '' || loginpassword === '') {
                //if credentials are wrong
                navigateTo('/login')
                setLoginStatus(`Wrong Credentials!`)

            }
            else {
                //if credentials are correct
                navigateTo('/dashboard')
            }
        })
    }

    useEffect(() => {
        if (loginStatus !== '') {
            setstatusHolder('showMessage')  //show message
            setTimeout(() => {
                setstatusHolder('message')  //hide it after 5s
            }, 5000);
        }

    }, [loginStatus])

    const onSubmit = () => {
        setLoginUserName('')
        setLoginPassword('')
    }

    return (
        <div className='loginPage flex'>
            <div className='container flex'>
                <div className='imageDiv'>
                    <img src={client} alt='client' />
                    <div className='textDiv'>
                        <h2 className='title'>Even the Smallest one can Change the World.</h2>
                        <p>We keep Extraordinary Breeds!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className='text'>Don't have an Account?</span>
                        <Link to={'/register'}>
                            <button className='btn'>Register</button>
                        </Link>
                    </div>
                </div>

                <div className='formDiv flex'>
                    <div className='headerDiv'>
                        <img src={rabbit} alt='rabbit' />
                        <h3>Welcome Back!</h3>
                    </div>

                    <form action='' className='form grid' onSubmit={onSubmit}>
                        {/* <span className={statusHolder}>{loginStatus}</span> */}

                        <div className='inputDiv'>
                            <label htmlFor='username'>Username</label>
                            <div className='input flex'>
                                <FaUserShield className='icon' />
                                <input type='text'
                                    id='username'
                                    placeholder='Username'
                                    onChange={(event) => { setLoginUserName(event.target.value) }}
                                />
                            </div>
                        </div>


                        <div className='inputDiv'>
                            <label htmlFor='password'>Password</label>
                            <div className='input flex'>
                                <BsFillShieldLockFill className='icon' />
                                <input type='password'
                                    id='password'
                                    placeholder='Password'
                                    onChange={(event) => { setLoginPassword(event.target.value) }}
                                />
                            </div>
                            <span className={statusHolder}>{loginStatus}</span>
                        </div>

                        <button type='submit' className='btn flex' onClick={loginUser} >
                            SignIn
                            <AiOutlineSwapRight className='icon' />
                        </button>

                        <span className='forgotPassword'>
                            <p>Forgot your password? <a href='forgot'> Click here</a></p>

                        </span>
                    </form>

                </div>

            </div>
        </div>
    )
}


export default Login;

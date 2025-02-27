import React, { useState } from 'react'
// import './Login.css'
import "./pagestyle.css";
// import image from './images/img-01.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './signin';
// import {Si1Password} from 'react-icons'
// import { BsFillPersonLinesFill ,BsFileZipFill} from "react-icons/bs";
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    React.useEffect(() => {
        if (localStorage.getItem('UserToken')) {
            navigate('/Profile')
        }
    })
    const userLog = (e) => {
        // alert("cknjkcn")
        e.preventDefault()
        axios.post('https://bank-server-yibm.onrender.com/api/user/login', {
            Email: email,
            Password: password
        }, [])
            .then(res => {
                console.log(res);
                if (res.data) {
                    localStorage.setItem('UserToken', res.data)

                    setTimeout(function () {
                        navigate('/Profile')
                    }, 2000);
                    toast.success(' successfully logedin!!!', {
                        className: "toast-success",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(err => {
                console.log(err.message);
                toast.error("email & password not maching")
            })
    }
    const acc = () => {
        navigate('/signin')
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" >
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            <h1>Member Login</h1>
                        </span>

                        <div className="wrap-input100 " data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                            </span>
                        </div>


                        <div className="wrap-input100 " data-validate="Password is required">
                            <input className="input100" type="password" name="pass" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                            </span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button type="submit" className="login100-form-btn" onClick={userLog} >
                                Login
                            </button>
                        </div>


                        <div className="container-login100-form-btn">
                            <button onClick={acc} className="login100-form-btn">
                                Create-Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

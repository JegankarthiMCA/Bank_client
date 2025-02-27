import React, { useState, useEffect } from 'react';
import "./log-css.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('UserToken')) {
      navigate('/Profile');
    }
  }, [navigate]);

  const userLog = (e) => {
    e.preventDefault();
    axios.post('https://bank-server-yibm.onrender.com/api/user/login', {
      Email: email,
      Password: password
    })
      .then(res => {
        if (res.data) {
          localStorage.setItem('UserToken', res.data);
          setTimeout(() => {
            navigate('/Profile');
          }, 2000);
          toast.success('Successfully logged in!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      })
      .catch(err => {
        toast.error("Email or password is incorrect");
      });
  };

  const acc = () => {
    navigate('/signin');
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <h1 className="login-title">Member Login</h1>

            <div className="wrap-input100" data-validate="Valid email is required: ex@abc.xyz">
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100" data-validate="Password is required">
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn" onClick={userLog}>
                Login
              </button>
            </div>

            <div className="container-login100-form-btn">
              <button onClick={acc} className="login100-form-btn">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;

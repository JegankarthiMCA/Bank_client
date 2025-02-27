import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css';

export default function Name() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [UserToken, setToken] = useState();

  useEffect(() => {
    if (!localStorage.getItem('UserToken')) {
      navigate('/login');
    } else {
      setToken(localStorage.getItem('UserToken'));
      axios({
        method: 'get',
        url: 'https://bank-server-yibm.onrender.com/api/user/profile',
        headers: {
          accept: 'application/json',
          token: UserToken,
        },
      })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [UserToken, navigate]);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const withdraw = () => {
    navigate('/Withdraw');
  };

  const Deposit = () => {
    navigate('/deposit');
  };

  return (
    <div className='profile-container'>
      <div className='profile'>
        <h1 className='profile-title'>
          <b>PROFILE</b>
        </h1>
        <div className='profile-info'>
          <h4>
            <span className='profile-label'>Name: </span>
            <span className='profile-value'>{data.Name}</span>
          </h4>
          <h4>
            <span className='profile-label'>DOB: </span>
            {data.Dob}
          </h4>
          <h4>
            <span className='profile-label'>Email: </span>
            {data.Email}
          </h4>
          <h4>
            <span className='profile-label'>Balance: </span>
            ₹{data.Balance}
          </h4>
          <h4>
            <span className='profile-label'>Mobile Number: </span>
            {data.PhoneNumber}
          </h4>
        </div>

        {/* Deposit Button */}
        <button className='btn-profile deposit-btn' onClick={Deposit}>
          <span className='btn-text'>Deposit</span>
        </button>

        {/* Withdraw Button */}
        <button className='btn-profile withdraw-btn' onClick={withdraw}>
          <span className='btn-text'>Withdraw</span>
        </button>

        {/* Logout Button */}
        <button className='btn-profile logout-btn' onClick={logout}>
          <span className='btn-text'>Logout</span>
        </button>
      </div>
    </div>
  );
}

import {useNavigate} from 'react-router-dom'
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import "./profile.css";
export default function Name() {
    const navigate=useNavigate()
    const [data,setData] = useState([])
    const [UserToken,setToken]= useState();
    
    useEffect(()=>{
        if(!localStorage.getItem('UserToken')){
            navigate('/login')
        }else{
            setToken(localStorage.getItem('UserToken'))
        axios({
          method:"get",
          url:"https://bank-client-owcv.onrender.com/api/user/profile",
          headers:{
              accept: 'application/json',
              token:UserToken,
          }
          
      })
      .then(res=> {
          setData(res.data)
          // console.warn(data);
      } )
      .catch(err=>console.log(err))
    
        }
    },[UserToken, data, navigate])
    // console.log(UserToken);
    const logout=()=>{
        localStorage.clear()
        navigate('/login')
    }
//Withdraw nav
    const withdraw = () => {
     navigate('/Withdraw')
    }
//Deposit nav
    const Deposit = () => {
      navigate('/deposit')
    }
    // console.log(UserToken);
    return(
        <>


        <div className='profile'>
        <h1 className="h" ><b>PROFILE</b></h1><br /><br />
  <h4> <sapan className="color">Name</sapan>: <span className='span'>{data.Name}</span></h4><br /><br />
  <h4>   <sapan className="color">DOB</sapan>: {data.Dob}</h4><br /><br />
  <h4>   <sapan className="color">Email</sapan>: {data.Email}</h4><br /><br />
  <h4>   <sapan className="color">Balance</sapan>: {data.Balance}</h4><br /><br />
  <h4>   <sapan className="color">Mobile_Number</sapan>: {data.PhoneNumber}</h4><br /><br />
        </div>
        {/* Deposit nav */}
        <button className="btn-profile" onClick={Deposit} >
	 {/* <span className="price">${data.Balance}</span> */}
   <span className="buy">Deposit</span>
 </button>
        {/* withdraw nav */}
        <button className="btn-profile">
	 {/* <span className="price">{data.Balance}</span> */}
   <span className="buy" onClick={withdraw} >With draw</span>
 </button>
        <button onClick={logout} > LogOut</button>
        </>
    )
}

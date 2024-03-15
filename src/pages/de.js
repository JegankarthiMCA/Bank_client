import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./pagestyle.css";
const Deposit = () => {
    const [token,setToken]=useState('')
    const[balance,setBalance]=useState(0)
    const [amount,setAmount]=useState(null)
    const [data,setData]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        setToken( localStorage.getItem('UserToken'))
        // console.warn(token);
        if(! localStorage.getItem('UserToken')){
            navigate('/')
        }
        if(token){
         axios({
             method:"get",
             url:"https://bank-server-yibm.onrender.com/api/user/profile",
             headers:{
                 accept: 'application/json',
                 token:token
             }
         })
         .then(res=>{
            setData(res.data)
            if(data){
                setBalance(parseInt(data.Balance))
                // console.log(balance);
            }

        })
         .catch(err=>console.log(err))
     }
    }, [token, data,])

    const Dep=()=>{
        if(amount>0){
            // console.log(typeof balance);
            const am=Number(amount)
            // console.log(typeof balance);
            const result=balance+am
            // console.log(result);
            
            axios({
                method:"put",
                url:"https://bank-server-yibm.onrender.com/api/user/update",
                data: {
                   Balance: result
                },
                headers:{
                    accept: 'application/json',
                    token:token
                }
            }).then(res=>{
                console.log(res.data);
                toast.success(' successfully Deposited!!!', {
                    className:"toast-success",
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(err=>
                console.log(err)
                // toast.error("email & password not maching")
                
                )

        }else{
            toast.error("🎆enter a valid amount",{
                className:"toast-error"
            })
        }
        setAmount("")
    }

const back=()=>{
    navigate('/Profile')
}

  return (
    <div>
        <div className="Deposite" >
    <div className="Deposite-container">
        <div className="brand-logoD"></div>
        <center>
    
            <div className="brand-title">Deposite</div>
            <h1><b>Balance:</b> {balance}</h1>
        </center>
        <div className="inputs">
           
          <label><b>AMOUNT</b></label>
          <input type="number" placeholder="ENTER YOUR AMOUNT" value={amount} onChange={(e)=>setAmount(e.target.value)}  />
          <button type="submit" onClick={Dep} className="button withdrawBtn">Deposite</button>
          <button type="submit" onClick={back} className="button withdrawBtn">Back</button>
        </div>
   </div>
   <ToastContainer />
  </div>
    </div>
  )
}

export default Deposit

import { useState } from "react"
import { toast,ToastContainer } from "react-toastify"
import "./Model.css"
import axios from "axios"

const Model = ({setModel,data,result,token,setAmount,action}) => {
  const[bin,setBin]=useState()
  const[ref,setRef]=useState(false)
  const close=()=>{
    setModel(false)
  }

  const dep=(e)=>{
    e.preventDefault()
    
    if(data==bin){
      axios({
        method:"put",
        url:"https://bank-client-owcv.onrender.com//api/user/update",
        data: {
            Balance: result
        },
        headers:{
            accept: 'application/json',
            token:token
        }
      }).then(()=>{
        toast.success(`${action} Success`)
        setRef(!ref)
        setAmount("")
      })
      setModel(false)
    }else if(data!=bin){
      console.log('====================================');
    console.log(data,bin);
    console.log('====================================');
      toast.error("Bin is wrong")
    }
  }
  return (
    <div className="model">
      <div className='modelContainer'>
        <div className="modelwrapper">
          <div className="closeCon">
          <h4 className="close" onClick={close}>X</h4>
          </div>
          <form action="">
            <label htmlFor="">Enter the bin</label><br />
            <input type="number" className='modelInp' onChange={(e)=>setBin(e.target.value)} id="" /><br />
            <button className="modelBtn" onClick={dep}>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Model

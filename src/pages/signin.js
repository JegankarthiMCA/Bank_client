import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./pagestyle.css";

export default function Signin() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bin, setBin] = useState("");
  const navigate = useNavigate()

  const handleCreate = async () => {
    try {
      axios.post("https://bank-client-owcv.onrender.com/api/user/createAccount", {
        Name: name,
        Email: email,
        Password: password,
        Dob: dob,
        Address: address,
        Gender: gender,
        PhoneNumber: phoneNumber,
        Bin: bin
      })
        .then(res => {
          console.log(res)
          navigate('/login')
        }
        )
        .catch(err => console.warn(err))
      //  const result=await fetch('https://bank-server-jk.onrender.com/api/user/createAccount',{
      //     method:"post",
      //     body:JSON.stringify({
      //         Name:name,
      //         Email:email,
      //         Password:password,
      //         Dob:dob,
      //         Address:address,
      //         Gender:gender,
      //         PhoneNumber:phoneNumber
      //     }),
      //     headers:{
      //       'content-type':'aplication/json'
      //     }
      //   })

      // result=await result.json()
      // console.log(result);
    } catch (error) {
      console.error(error);
    }



  }
  console.log(gender);

  return (
    <>
      <h1>Create Account</h1>
      <div className="signin">
        <div id="form">

          <>
            <div className="row ">
              <form onSubmit={handleCreate}>
                <div className="form-group">
                  <label className="signtext">Name: </label><br />
                  <input type="text"
                    className="inputsign"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div><br />

                <div className="form-group">
                  <label className="signtext">Email address</label><br />
                  <input
                    type="email"
                    className="inputsign"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                </div>
                <br />
                <div className="form-group">
                  <label className="signtext">DOB</label><br />
                  <input type="date"
                    className="inputsign"
                    placeholder="DOB"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div><br />
                <div className="form-group">
                  <label className="signtext">Address</label><br />
                  <input type="text"
                    className="inputsign"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div><br />
                <div className="form-group">
                  <label className="signtext">Gender</label><br />
                  <select className="inputsign selectGen" onChange={(e) => setGender(e.target.value)}>
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                  {/* <input type="text"
                  className="inputsign"
                    placeholder="M/F/O"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  /> */}
                </div><br />
                <div className="form-group">
                  <label className="signtext">Mobile_Number</label><br />
                  <input type="text"
                    className="inputsign"
                    placeholder="Enter Mobile Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div><br />
                <div className="form-group">
                  <label className="signtext">Password</label><br />
                  <input
                    type="password"
                    className="inputsign"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="signtext">Bin</label><br />
                  <input
                    type="number"
                    className="inputsign"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={bin}
                    onChange={(e) => setBin(e.target.value)}
                  />
                </div>
                <br />

              </form>
              <button
                type="submit"
                className="button-33"
                disabled={!name && !email && !password}
                onClick={handleCreate}
              >
                Submit
              </button>
            </div>
          </>

        </div>
      </div>
    </>
  );
}

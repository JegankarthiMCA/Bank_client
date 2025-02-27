// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import "./pagestyle.css";

// export default function Signin() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [dob, setDob] = useState("");
//   const [address, setAddress] = useState("");
//   const [gender, setGender] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [bin, setBin] = useState("");
//   const navigate = useNavigate()

//   const handleCreate = async () => {
//     try {
//       axios.post("https://bank-server-yibm.onrender.com/api/user/createAccount", {
//         Name: name,
//         Email: email,
//         Password: password,
//         Dob: dob,
//         Address: address,
//         Gender: gender,
//         PhoneNumber: phoneNumber,
//         Bin: bin
//       })
//         .then(res => {
//           console.log(res)
//           navigate('/login')
//         }
//         )
//         .catch(err => console.warn(err))
//       //  const result=await fetch('https://bank-server-jk.onrender.com/api/user/createAccount',{
//       //     method:"post",
//       //     body:JSON.stringify({
//       //         Name:name,
//       //         Email:email,
//       //         Password:password,
//       //         Dob:dob,
//       //         Address:address,
//       //         Gender:gender,
//       //         PhoneNumber:phoneNumber
//       //     }),
//       //     headers:{
//       //       'content-type':'aplication/json'
//       //     }
//       //   })

//       // result=await result.json()
//       // console.log(result);
//     } catch (error) {
//       console.error(error);
//     }



//   }
//   console.log(gender);

//   return (
//     <>
//       <h1>Create Account</h1>
//       <div className="signin">
//         <div id="form">

//           <>
//             <div className="row ">
//               <form onSubmit={handleCreate}>
//                 <div className="form-group">
//                   <label className="signtext">Name: </label><br />
//                   <input type="text"
//                     className="inputsign"
//                     placeholder="Enter Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div><br />

//                 <div className="form-group">
//                   <label className="signtext">Email address</label><br />
//                   <input
//                     type="email"
//                     className="inputsign"
//                     id="exampleInputEmail1"
//                     aria-describedby="emailHelp"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />

//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label className="signtext">DOB</label><br />
//                   <input type="date"
//                     className="inputsign"
//                     placeholder="DOB"
//                     value={dob}
//                     onChange={(e) => setDob(e.target.value)}
//                   />
//                 </div><br />
//                 <div className="form-group">
//                   <label className="signtext">Address</label><br />
//                   <input type="text"
//                     className="inputsign"
//                     placeholder="Address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                 </div><br />
//                 <div className="form-group">
//                   <label className="signtext">Gender</label><br />
//                   <select className="inputsign selectGen" onChange={(e) => setGender(e.target.value)}>
//                     <option></option>
//                     <option>Male</option>
//                     <option>Female</option>
//                     <option>Others</option>
//                   </select>
//                   {/* <input type="text"
//                   className="inputsign"
//                     placeholder="M/F/O"
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                   /> */}
//                 </div><br />
//                 <div className="form-group">
//                   <label className="signtext">Mobile_Number</label><br />
//                   <input type="text"
//                     className="inputsign"
//                     placeholder="Enter Mobile Number"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                   />
//                 </div><br />
//                 <div className="form-group">
//                   <label className="signtext">Password</label><br />
//                   <input
//                     type="password"
//                     className="inputsign"
//                     id="exampleInputPassword1"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group">
//                   <label className="signtext">Bin</label><br />
//                   <input
//                     type="number"
//                     className="inputsign"
//                     id="exampleInputPassword1"
//                     placeholder="Password"
//                     value={bin}
//                     onChange={(e) => setBin(e.target.value)}
//                   />
//                 </div>
//                 <br />

//               </form>
//               <button
//                 type="submit"
//                 className="button-33"
//                 disabled={!name && !email && !password}
//                 onClick={handleCreate}
//               >
//                 Submit
//               </button>
//             </div>
//           </>

//         </div>
//       </div>
//     </>
//   );
// }
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      axios.post("https://bank-server-yibm.onrender.com/api/user/createAccount", {
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
        console.log(res);
        navigate('/login');
      })
      .catch(err => console.warn(err));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Create Account</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <form onSubmit={handleCreate}>
                <div className="form-group mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Bin</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Bin"
                    value={bin}
                    onChange={(e) => setBin(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={!name || !email || !password || !dob || !address || !gender || !phoneNumber || !bin}
                  onClick={handleCreate}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

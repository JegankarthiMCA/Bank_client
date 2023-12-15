import './App.css';
import Navbar from "./components/nav.js";
import { BrowserRouter as HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Signin from './pages/signin';
import Banking from './pages/bank';
import Alldata from './pages/alldata';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw';
import Login from './pages/Login'
import Profile from './pages/Profile'
// import Footer from './pages/footer'



function App() {

  return (<>
  <HashRouter>
    <div className="App">
      <div>
      <Navbar/>
   
      <Routes>
          
        <Route path="/" element={<Banking/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Withdraw" element={<Withdraw />} />
      </Routes>

      </div>
    </div>
    </HashRouter>
    {/* <Footer/> */}
    </>
  );
}

export default App;

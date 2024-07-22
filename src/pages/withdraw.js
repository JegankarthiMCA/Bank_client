import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Model from "../components/Model";
const Withdraw = () => {
  const [token, setToken] = useState("");
  const [balance, setBalance] = useState(0);
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(null);
  const [model, setModel] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setToken(localStorage.getItem("UserToken"));
    // console.warn(token);
    if (!localStorage.getItem("UserToken")) {
      navigate("/");
    }
    if (token) {
      axios({
        method: "get",
        url: "https://bank-client-owcv.onrender.com/api/user/profile",
        headers: {
          accept: "application/json",
          token: token,
        },
      })
        .then((res) => {
          setData(res.data);
          if (data) {
            setBalance(parseInt(data.Balance));
          }
        })
        .catch((err) => console.log(err));
    }
  }, [token]);
  console.log(data);
  console.log(data?.Balance);

  const Dep = () => {
    if (amount > 0) {
        if(amount<= data.Balance){
            let am = Number(amount);
            console.log(am);
            setResult(Number(parseInt(data.Balance)) - am);
            console.log(result);
            setModel(() => !model);
        }else{
            toast.error("insufficient balance")
        }
    } else {
      toast.error("🎆enter a valid amount", {
        className: "toast-error",
      });
    }
  };
  const back = () => {
    navigate("/Profile");
  };

  return (
    <div>
      <div className="Deposite">
        <div className="Deposite-container">
          <div className="brand-logoD"></div>
          <center>
            <div className="brand-title">Withdraw</div>
          </center>
          <div className="inputs">
            <label>
              <b>AMOUNT</b>
            </label>
            <input
              type="number"
              placeholder="ENTER YOUR AMOUNT"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit" onClick={Dep} className="button withdrawBtn">
              Withdraw
            </button>
            <button type="submit" onClick={back} className="button withdrawBtn">
              Back
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
      {model && (
        <Model
          setModel={setModel}
          setAmount={setAmount}
          data={data?.Bin}
          result={result}
          token={token}
          action="withdraw"
        />
      )}
    </div>
  );
};

export default Withdraw;

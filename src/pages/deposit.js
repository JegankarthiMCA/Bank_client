import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./pagestyle.css";
import Model from "../components/Model";
const Deposit = () => {
  const [token, setToken] = useState("");
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(null);
  const [model, setModel] = useState(false);
  const [data, setData] = useState();
  const [result, setResult] = useState(0);
  const navigate = useNavigate();
  let am = 0;
  // let result=0

  useEffect(() => {
    setToken(localStorage.getItem("UserToken"));
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
            // console.log(balance);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  console.warn(data);
  const Dep = () => {
    if (amount > 0) {
      // console.log(typeof balance);
      am = Number(amount);
      console.log(am);
      console.log(balance);
      // result=Number(balance)+am
      setResult(Number(parseInt(data.Balance)) + am);

      setModel(() => !model);
    } else {
      toast.error("🎆enter a valid amount", {
        className: "toast-error",
      });
    }
  };
  // console.log(result);

  const back = () => {
    navigate("/Profile");
  };

  return (
    <div>
      <div className="Deposite">
        <div className="Deposite-container">
          <div className="brand-logoD"></div>
          <center>
            <div className="brand-title">Deposite</div>
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
              Deposite
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
          action="depsoit"
        />
      )}
    </div>
  );
};

export default Deposit;

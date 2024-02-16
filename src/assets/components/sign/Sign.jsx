import React, { useEffect, useState } from "react";
import logo from "./../../../logo.svg";
function Sign() {
  const [email, setEmail] = useState("");
  const [name,setName] = useState("");

  useEffect(()=>{
    setName(email.split('@')[0]);
  },[email])
;

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <div
        className="card d-flex flex-column p-3 border-3 "
        style={{ width: "75vw" }}
      >
        <div className="hstack justify-content-between">
          <img src={logo} style={{ width: "100px" }} />
          <div className="instagram-head">Instagram</div>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" autoComplete="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
          <div className="email">Hello {name},</div>
          
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sign;

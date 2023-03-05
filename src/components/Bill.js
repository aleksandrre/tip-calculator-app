import React from "react";

const Bill = (props) => {
  const handleChange = (event) => {
    props.setBill(Number(event.target.value));
  };
  return (
    <div className="divBill">
      <div className="divBillhs">
        <h1>Bill</h1>
        <h5 className={props.bill ? "h5hidden" : "h5active"}>Can't be zero</h5>
      </div>
      <div className="divBillinput">
        <img id="id2" src="./img/dollar.svg" />
        <input
          id="id1"
          type="number"
          value={props.bill}
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default Bill;

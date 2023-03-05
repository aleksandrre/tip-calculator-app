import React from "react";

const Amount = (props) => {
  const handleChange = (event) => {
    props.setBill(0);
    props.setTip(0);
    props.setPeople(0);
  };
  console.log(props.x);
  return (
    <div className="divcontainerright">
      <div className="divcontainerrightcontainer">
        <div className="divtipamount">
          <div>
            <h2>Tip Amount</h2>
            <h3>person</h3>
          </div>
          <h4>${props.people == 0 ? "0" : props.x}</h4>
        </div>
        <div className="divtotal">
          <div>
            <h2>Tip Amount</h2>
            <h3>person</h3>
          </div>
          <h4>${props.people == 0 ? "0" : props.y}</h4>
        </div>
        <div className="divbutton" onClick={handleChange}>
          RESET
        </div>
      </div>
    </div>
  );
};

export default Amount;

import React from "react";

const People = (props) => {
  const handleChange = (event) => {
    props.setPeople(Number(event.target.value));
  };
  return (
    <div className="divtip">
      <div className="divBillhs">
        <h1>Number of People</h1>
        <h5 className={props.people ? "h5hidden" : "h5active"}>
          Can't be zero
        </h5>
      </div>
      <div className="divBillinput">
        <img src="./img/person.svg" />
        <input
          id="id1"
          type="number"
          value={props.people}
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default People;

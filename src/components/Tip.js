import React from "react";

const Tip = (props) => {
  const arrayOfPro = [5, 10, 15, 25, 50];
  const handleChange2 = (event) => {
    props.setTip(event.target.id);
    arrayOfPro.map(
      (box) => (document.getElementById(box).className = "divchildren")
    );
    event.target.className = "divchildrenupdate";
  };
  const handleChange = (event) => {
    props.setTip(event.target.value);
    arrayOfPro.map((box) => {
      document.getElementById(box).className = "divchildren";
    });
    arrayOfPro.map((box) =>
      event.target.value == box
        ? (document.getElementById(box).className = "divchildrenupdate")
        : ""
    );
  };
  return (
    <div className="divTip">
      <h1>Select Tip %</h1>
      <div className="divparentOfChildren">
        {arrayOfPro.map((box) => (
          <div id={box} className="divchildren" onClick={handleChange2}>
            {box}%
          </div>
        ))}
        <input
          value={props.tip}
          type="number"
          className="divchildrenInput"
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default Tip;

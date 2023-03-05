import "./reset.css";
import "./App.css";
import Bill from "./components/Bill";
import People from "./components/People";
import Tip from "./components/Tip";
import Amount from "./components/Amount";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);

  let x = ((bill * tip) / 100 / people).toFixed(2);
  let y = ((bill + (bill * tip) / 100) / people).toFixed(2);

  return (
    <div className="divmain">
      <div className="divlogo">
        <img className="logo" src="./img/logo.svg" />
      </div>
      <div className="divforwidth">
        <div className="divmainwhite">
          <div className="divcontainer">
            <div className="divcontainerleft">
              <Bill bill={bill} setBill={setBill} />
              <Tip tip={tip} setTip={setTip} />
              <People people={people} setPeople={setPeople} />
            </div>
            <Amount
              people={people}
              setBill={setBill}
              setTip={setTip}
              setPeople={setPeople}
              y={y}
              x={x}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

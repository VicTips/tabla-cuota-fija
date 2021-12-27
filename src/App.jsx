import "./App.css";
import Inputs from "./components/Input";
import { useState } from "react";
import AmortizationTable from "./components/AmortizationTable";

function App() {
  const [loan, setLoan] = useState("");
  const [nper, setNper] = useState("");
  const [rate, setRate] = useState("");
  return (
    <>
      <Inputs
        onChange={(loan, nper, rate) => {
          setLoan(loan);
          setNper(nper);
          setRate(rate);
        }}
      />
      <AmortizationTable loan={loan} nper={nper} rate={rate} />
    </>
  );
}

export default App;

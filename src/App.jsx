import "./App.css";
import Inputs from "./components/Input";
import { useState } from "react";
import AmortizationTable from "./components/AmortizationTable";
import Box from "@mui/material/Box";

function App() {
  const [loan, setLoan] = useState("");
  const [nper, setNper] = useState("");
  const [rate, setRate] = useState("");
  return (
    <Box m={{xs: 2, sm: 3, md: 4, lg: 5}}>
      <Inputs
        onChange={(loan, nper, rate) => {
          setLoan(loan);
          setNper(nper);
          setRate(rate);
        }}
      />
      <AmortizationTable loan={loan} nper={nper} rate={rate} />
    </Box>
  );
}

export default App;

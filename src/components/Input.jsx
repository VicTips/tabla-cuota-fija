import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";

function Inputs({ onChange }) {
  const [loan, setLoan] = useState("");
  const [nper, setNper] = useState("");
  const [rate, setRate] = useState("");
  useEffect(() => {
    onChange(loan, nper, rate);
  }, [loan, nper, rate]);

  let payment = "";
  if (loan && nper && rate !== "") {
    payment = (loan * rate) / 100 / (1 - (1 + rate / 100) ** -nper);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          required
          variant="filled"
          label="Valor del crédito"
          type="number"
          color="success"
          onChange={(e) => setLoan(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          variant="filled"
          label="Número de periodos"
          type="number"
          color="success"
          onChange={(e) => setNper(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          variant="filled"
          label="Tasa de interés"
          type="number"
          color="success"
          onChange={(e) => setRate(e.target.value)}
        />
      </Grid>
    </Grid>
  );
}

export default Inputs;

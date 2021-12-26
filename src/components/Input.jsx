import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function Inputs() {
  const [valorCredito, setValorCredito] = useState("");
  const [nper, setNper] = useState("");
  const [tasa, setTasa] = useState("");
  let cuota = "";
  if(valorCredito && nper && tasa !== "") {
    cuota = valorCredito * tasa/100 / (1 - (1 + tasa/100)**(-nper))
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
            onChange={(e) => setValorCredito(e.target.value)}
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
            onChange={(e) => setTasa(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          {cuota}
        </Grid>
      </Grid>
  );
};

export default Inputs;

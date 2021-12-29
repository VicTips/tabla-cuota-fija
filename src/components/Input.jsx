import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect, forwardRef } from "react";
import NumberFormat from "react-number-format";

const FormatCurrency = forwardRef(function FormatCurrency(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      allowNegative={false}
      decimalScale={2}
      prefix="$"
    />
  );
});

const FormatPercentage = forwardRef(function FormatPercentage(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      allowNegative={false}
      suffix="%"
    />
  );
});

function Inputs({ onChange }) {
  const [loan, setLoan] = useState("");
  const [nper, setNper] = useState("");
  const [rate, setRate] = useState("");

  useEffect(() => {
    onChange(loan, nper, rate);
  }, [loan, nper, rate]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="loan"
          required
          variant="filled"
          label="Valor del crédito"
          color="success"
          onChange={(e) => setLoan(e.target.value)}
          InputProps={{
            inputComponent: FormatCurrency,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="nper"
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
          id="rate"
          required
          variant="filled"
          label="Tasa de interés"
          color="success"
          onChange={(e) => setRate(e.target.value)}
          InputProps={{
            inputComponent: FormatPercentage,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Inputs;

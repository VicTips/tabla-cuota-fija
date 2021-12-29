import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function AmortizationTable({ loan, nper, rate }) {
  let payment = "";
  if (loan && nper && rate !== "") {
    payment = (loan * rate) / 100 / (1 - (1 + rate / 100) ** -nper);
  }

  // let periods = [];
  // let interest = [0];
  // let principal = [0];
  // let balance = [loan];
  // if (loan && nper && rate !== "") {
  //   for (let period = 0; period <= nper; period++) {
  //     periods.push(period);
  //     interest.push(balance[period] * (rate / 100));
  //     principal.push(payment - interest[period + 1]);
  //     balance.push(
  //       loan * (1 + rate / 100) ** (period + 1) -
  //         (payment * ((1 + rate / 100) ** (period + 1) - 1)) / (rate / 100)
  //     );
  //   }
  // }
  // for (let i = 0; i <= nper; i++) {
  //   console.log(parseFloat(balance[i]).toFixed(2));
  // }
  let rows = [{ period: 0, payment: 0, interest: 0, principal: 0, balance: loan }];
  if (loan && nper && rate !== "") {
    for (let period = 1; period <= nper; period++) {
      rows.push({
        period: period,
        payment: payment,
        interest:
          ((loan * (1 + rate / 100) ** (period - 1) -
            (payment * ((1 + rate / 100) ** (period - 1) - 1)) / (rate / 100)) *
            rate) /
          100,
        principal:
          payment -
          ((loan * (1 + rate / 100) ** (period - 1) -
            (payment * ((1 + rate / 100) ** (period - 1) - 1)) / (rate / 100)) *
            rate) /
            100,
        balance:
          loan * (1 + rate / 100) ** period -
          (payment * ((1 + rate / 100) ** period - 1)) / (rate / 100),
      });
    }
  }
  for (let i = 0; i <= nper; i++) {
    console.log(rows[i]);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Periodo</TableCell>
            <TableCell align="center">Cuota</TableCell>
            <TableCell align="center">Intereses</TableCell>
            <TableCell align="center">Amortización</TableCell>
            <TableCell align="center">Saldo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.period}</TableCell>
              <TableCell align="center">{parseInt(row.payment).toFixed(0)}</TableCell>
              <TableCell align="center">{parseInt(row.interest).toFixed(0)}</TableCell>
              <TableCell align="center">{parseInt(row.principal).toFixed(0)}</TableCell>
              <TableCell align="center">{parseInt(row.balance).toFixed(0)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AmortizationTable;

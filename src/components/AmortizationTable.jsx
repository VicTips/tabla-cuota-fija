import React from "react";

function AmortizationTable({ loan, nper, rate }) {
  let payment = "";
  if (loan && nper && rate !== "") {
    payment = (loan * rate) / 100 / (1 - (1 + rate / 100) ** -nper);
  }

  let periods = [];
  if (nper !== "") {
    for (let period = 0; period <= nper; period++) {
      periods.push(period);
    }
  }

  let interest = [0];
  let principal = [0];
  let balance = [loan];
  if (loan && nper && rate !== "") {
    for (let period = 0; period <= nper; period++) {
      interest.push(balance[period] * (rate / 100));
      principal.push(payment - interest[period + 1]);
      balance.push(
        loan * (1 + rate / 100) ** (period + 1) -
          (payment * ((1 + rate / 100) ** (period + 1) - 1)) / (rate / 100)
      );
    }
  }
  for (let i = 0; i <= nper; i++) {
    console.log(parseFloat(balance[i]).toFixed(2));
  }
  return (
    <div>
      <span>{payment}</span>
      <br />
      <span>{periods}</span>
      <br />
    </div>
  );
}

export default AmortizationTable;

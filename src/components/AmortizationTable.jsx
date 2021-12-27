import React from "react";

function AmortizationTable({ loan, nper, rate }) {
  let payment = "";
  if (loan && nper && rate !== "") {
    payment = (loan * rate) / 100 / (1 - (1 + rate / 100) ** -nper);
  }

  let periods = [];
  if (nper !== "") {
    for (let period = 0; period <= nper; period++) {
      periods.push(period)
    }
  }

  return (
    <div>
      <span>{payment}</span><br/>
      <span>{periods}</span>
    </div>
  );
}

export default AmortizationTable;

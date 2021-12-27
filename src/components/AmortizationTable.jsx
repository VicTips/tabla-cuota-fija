import React from "react";

function AmortizationTable({ loan, nper, rate }) {
  let payment = "";
  if (loan && nper && rate !== "") {
    payment = (loan * rate) / 100 / (1 - (1 + rate / 100) ** -nper);
  }

  return (
    <div>
      <span>{payment}</span>
    </div>
  );
}

export default AmortizationTable;

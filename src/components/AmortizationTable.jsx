import React from "react";

function AmortizationTable({ loan, nper, rate }) {
  return (
    <div>
      <span>{loan}</span>
      <span>{nper}</span>
      <span>{rate}</span>
    </div>
  );
}

export default AmortizationTable;

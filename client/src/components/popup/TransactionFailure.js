import { Result } from "antd";
import React from "react";

const TransactionFailure = (props) => (
  <Result
    status="error"
    title={`There are some problems with your transaction: ${props.code}`}
    subTitle={`The error is: ${props.message}`}
  />
);

export default TransactionFailure;

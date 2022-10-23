import { Box, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DarkmodeEnable } from "../../../App";

const Approved = () => {
  const { isDark } = React.useContext(DarkmodeEnable);

  const [paymentData, setPaymentData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.flyfarint.com/v.1.0.0/Admin/DepositRequest/allRequest.php?status=Approved`
    )
      .then((res) => res.json())
      .then((data) => setPaymentData(data));
  }, []);
  return (
    <Box
      style={{ width: "98% " }}
      className="searchHistoryTable"
      marginTop={"20px"}
    >
      {/* <Box className="searchList1" mb={2}>
    <input type="text" placeholder="search" />
  </Box> */}

      <table>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Agent Id</th>
            <th>Sender acc </th>
            <th>Receiver Acc</th>
            <th colSpan={3}>Transaction</th>
            <th>Status </th>
            <th>Payment Method </th>
            <th>Action</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th style={{ backgroundColor: "#003566", width: "100px" }}>Id </th>
            <th style={{ backgroundColor: "#003566", width: "100px" }}>
              Amount{" "}
            </th>
            <th style={{ backgroundColor: "#003566", width: "100px" }}>Date</th>
            <th> </th>
            <th></th>
            <th></th>
          </tr>

          {paymentData.map((data) => (
            <tr>
              <td>{data?.id}</td>
              <td>{data?.agentId}</td>
              <td>{data?.sender}</td>
              <td>{data?.reciever}</td>
              <td>{data?.transactionId}</td>
              <td>{data?.amount}</td>
              <td>{data?.createdAt}</td>
              <td>{data?.status}</td>
              <td>{data?.paymentmethod}</td>
              <td>View Details</td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </Box>
  );
};

export default Approved;

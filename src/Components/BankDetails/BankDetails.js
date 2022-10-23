import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useCollapse from "react-collapsed";
import { BsSearch } from "react-icons/bs";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { DarkmodeEnable } from "../../App";

import TableCompoWithTwoBtn from "../TableCompo/TableCompoWithTwoBtn";

const BankDetails = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const navigate = useNavigate();
  const bankArr = [
    "Bank ID",
    "Bank Name",
    "Account No",
    "Branch",
    "Amount",
    "Action",
  ];
  function createDataEmpDoc(id, name, acc, branch, amount) {
    return { id, name, acc, branch, amount };
  }
  const rowsBank = [
    createDataEmpDoc(
      "001",
      "Brac Bank",
      "14484818541781",
      "Dhaka,Bngladesh",
      "552152"
    ),
    createDataEmpDoc(
      "002",
      "Brac Bank",
      "14484818541781",
      "Dhaka,Bngladesh",
      "552152"
    ),
    createDataEmpDoc(
      "003",
      "Brac Bank",
      "14484818541781",
      "Dhaka,Bngladesh",
      "552152"
    ),
    createDataEmpDoc(
      "004",
      "Brac Bank",
      "14484818541781",
      "Dhaka,Bngladesh",
      "552152"
    ),
  ];
  return (
    <Box
      sx={{
        marginTop: "100px",
        height: "180vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <Typography
          sx={{
            my: "30px",
            fontSize: "20px",
            textDecoration: "underline",
            color: `${isDark ? "white" : "#003566"}`,
          }}
        >
          Bank Details
        </Typography>{" "}
        <Button
          onClick={() => navigate("/add-bank")}
          size="small"
          sx={{
            my: "30px",
            padding: "0 20px",
            fontSize: "14px",
            background: "#003566",
            "&:hover": {
              background: "#003566",
            },
            color: "white",
            borderRadius: "0",
          }}
        >
          Add Bank
        </Button>{" "}
      </Box>
      <Typography
        sx={{
          my: "30px",
          fontSize: "15px",
          textDecoration: "underline",
          fontWeight: "600",
          color: "#DC143C",
        }}
      >
        Cash Details / Bank Details
      </Typography>{" "}
      <TableCompoWithTwoBtn
        rows={rowsBank}
        arr={bankArr}
      ></TableCompoWithTwoBtn>
    </Box>
  );
};

export default BankDetails;

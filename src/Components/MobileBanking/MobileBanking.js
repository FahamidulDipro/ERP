import { Box, Typography } from "@mui/material";
import React from "react";
import { DarkmodeEnable } from "../../App";
import TableCompoWithEditDelete from "../TableCompo/TableCompoWithEditDelete";
import TableCompoWithTwoBtn from "../TableCompo/TableCompoWithTwoBtn";

const MobileBanking = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const bankArr = [
    "Transaction ID",
    "Recipant",
    "Account No",
    "Amount",
    "Created Date",
    "Action",
  ];
  function createDataEmpDoc(id, recipant, acc, amount, created) {
    return { id, recipant, acc, amount, created };
  }
  const rowsBank = [
    createDataEmpDoc("001", "B Kash", "14484818541781", "5522", "10/08/2022"),
    createDataEmpDoc("002", "B Kash", "14484818541781", "5522", "10/08/2022"),
    createDataEmpDoc("003", "B Kash", "14484818541781", "5522", "10/08/2022"),
    createDataEmpDoc("004", "B Kash", "14484818541781", "5522", "10/08/2022"),
  ];
  return (
    <Box
      sx={{
        marginTop: "100px",
        height: "180vh",
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
      <Typography
        sx={{
          my: "30px",
          fontSize: "15px",
          textDecoration: "underline",
          fontWeight: "600",
          color: "#DC143C",
        }}
      >
        Cash Details / Mobile Banking
      </Typography>{" "}
      <TableCompoWithEditDelete
        rows={rowsBank}
        arr={bankArr}
      ></TableCompoWithEditDelete>
    </Box>
  );
};

export default MobileBanking;

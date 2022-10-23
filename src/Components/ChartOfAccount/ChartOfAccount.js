import { Box, Typography } from "@mui/material";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { DarkmodeEnable } from "../../App";
import TableCompo from "../TableCompo/TableCompo";
import TableCompoWithoutAction from "../TableCompo/TableCompoWithoutAction";

const ChartOfAccount = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const clientPassportArr = ["Item ID", "Account Type", "Amount", "", "Action"];
  function createDataEmpDoc(id, name, dept, des) {
    return { id, name, dept, des };
  }
  const rowsEmpDoc = [
    createDataEmpDoc("001", "Bank", "500000"),
    createDataEmpDoc("002", "Hand Cash", "515185151"),
    createDataEmpDoc("003", "Mobile Banking", "515185151"),
    createDataEmpDoc("004", "SSL Commerce", "515185151"),
  ];
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        marginTop: "100px",
        marginLeft: "270px",
        width: "80%",
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          my: "20px",
          fontSize: "20px",
          textDecoration: "underline",
          color: `${isDark ? "white" : "#003566"}`,
        }}
      >
        Chart Of Account
      </Typography>
      <Typography
        sx={{
          my: "10px",
          fontSize: "15px",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#DC143C",
        }}
      >
        Cash Details{" "}
      </Typography>

      {/* {location.pathname === "/chartOfAccount/bankDetails" ? (
        <Outlet></Outlet>
      ) : ( */}
      <>
        {" "}
        <TableCompo
          rows={rowsEmpDoc}
          arr={clientPassportArr}
          details="chartOfAccountDetail"
        ></TableCompo>
      </>
      {/* )} */}
    </Box>
  );
};

export default ChartOfAccount;

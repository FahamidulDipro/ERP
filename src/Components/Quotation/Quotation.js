import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { DarkmodeEnable } from "../../App";
import TableCompo from "../TableCompo/TableCompo";
import TableCompoWithDwnBtn from "../TableCompo/TableCompoWithDwnBtn";
import TableCompoWithoutAction from "../TableCompo/TableCompoWithoutAction";

const Quotation = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const clientPassportArr = [
    "Quatation No",
    "Issue Date",
    "Amount",
    "Created By ",
    "Client Name",
    "PAX No",
    "Action",
  ];
  function createDataEmpDoc(q_no, issueDate, amount, createdBy, client, pax) {
    return { q_no, issueDate, amount, createdBy, client, pax };
  }
  const rowsEmpDoc = [
    createDataEmpDoc(
      "001",
      "B Kash",
      "14484818541781",
      "Syed Afridi",
      "Biman Bangladesh",
      "552152"
    ),
    createDataEmpDoc(
      "002",
      "B Kash",
      "14484818541781",
      "Syed Afridi",
      "Biman Bangladesh",
      "552152"
    ),
    createDataEmpDoc(
      "003",
      "B Kash",
      "14484818541781",
      "Syed Afridi",
      "Biman Bangladesh",
      "552152"
    ),
    createDataEmpDoc(
      "004",
      "B Kash",
      "14484818541781",
      "Syed Afridi",
      "Biman Bangladesh",
      "552152"
    ),
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          Air Ticket Quatation{" "}
        </Typography>{" "}
        <Link to="/createQuotation" state={{ heading: "Air Ticket Quatation" }}>
          <button
            style={{
              borderRadius: "0",
              border: "none",
              padding: "10px 15px",
              background: "#003566",
              color: "white",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Create Quatation
          </button>
        </Link>
      </Box>

      <>
        {" "}
        <TableCompoWithDwnBtn
          rows={rowsEmpDoc}
          arr={clientPassportArr}
        ></TableCompoWithDwnBtn>
      </>
      {/* )} */}
    </Box>
  );
};

export default Quotation;

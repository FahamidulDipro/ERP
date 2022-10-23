import { Box, Typography } from "@mui/material";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { DarkmodeEnable } from "../../App";
import TableCompo from "../TableCompo/TableCompo";
import TableCompoWithoutAction from "../TableCompo/TableCompoWithoutAction";

const Vendor = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const clientPassportArr = ["Vendor ID", "Name", "Phone", "", "Action"];
  function createDataEmpDoc(id, name, dept, des) {
    return { id, name, dept, des };
  }
  const rowsEmpDoc = [
    createDataEmpDoc("001", "Travel Zoo", "+880 18455455"),
    createDataEmpDoc("002", "Travel Zoo", "+880 18455455"),
    createDataEmpDoc("003", "Travel Zoo", "+880 18455455"),
    createDataEmpDoc("004", "Travel Zoo", "+880 18455455"),
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddVendor = () => {
    navigate("/vendor/addVendor");
  };
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
          my: "30px",
          fontSize: "20px",
          textDecoration: "underline",
          color: `${isDark ? "white" : "#003566"}`,
        }}
      >
        Vendor
      </Typography>

      {location.pathname === "/vendor/addVendor" ? (
        <Outlet></Outlet>
      ) : (
        <>
          {" "}
          <Box sx={{ display: "flex", my: "20px" }}>
            {" "}
            <Box sx={{ mr: "20px" }}>
              <form className={`${isDark ? "form_dark" : "form"}`}>
                <button type="submit">
                  {" "}
                  <BsSearch
                    className={`${isDark ? "search_icon_dark" : "search_icon"}`}
                  ></BsSearch>
                </button>

                <input
                  type="search"
                  placeholder="Search"
                  style={{ borderRadius: "none" }}
                />
              </form>
            </Box>
            <button
              style={{
                background: "#70A5D8",
                color: "white",
                border: "none",
                width: "15%",
                height: "40px",
                cursor: "pointer",
              }}
              onClick={handleAddVendor}
            >
              Add Vendor
            </button>
          </Box>{" "}
          <TableCompo
            rows={rowsEmpDoc}
            arr={clientPassportArr}
            details="vendorDetails"
          ></TableCompo>
        </>
      )}
    </Box>
  );
};

export default Vendor;

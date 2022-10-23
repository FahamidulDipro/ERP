import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Payment = () => {


  return (
    <Box>
      {" "}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "20px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Box>
            <NavLink
              to="/manageWebsite/www.flyfarint.com/payment/all"
              className={({ isActive }) =>
                isActive ? "selected_tab" : "not_selected_tab"
              }
            >
              {" "}
              ALL
            </NavLink>

            <NavLink
              to="/manageWebsite/www.flyfarint.com/payment/pending"
              className={({ isActive }) =>
                isActive ? "selected_tab" : "not_selected_tab"
              }
            >
              Pending
            </NavLink>
            <NavLink
              to="/manageWebsite/www.flyfarint.com/payment/approved"
              className={({ isActive }) =>
                isActive ? "selected_tab" : "not_selected_tab"
              }
            >
              Approved
            </NavLink>
            <NavLink
              to="/manageWebsite/www.flyfarint.com/payment/cancelled"
              className={({ isActive }) =>
                isActive ? "selected_tab" : "not_selected_tab"
              }
            >
              Rejected
            </NavLink>
          </Box>
          {/* Select Type Section */}
          {/* <Box>
            <label for="payment-method" >Payment method:</label>
            <br></br>
            <select name="payment-method" id="payment-method" style={{ width: "250px", padding: "10px", border: "1px solid #003566", marginRight: "25px", cursor: "pointer" }}>

              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
              <option value="bankTransfer">Bank Transfer</option>
              <option value="mobileTransfer">Mobile Transfer</option>

            </select></Box> */}

        </Box>


        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Payment;

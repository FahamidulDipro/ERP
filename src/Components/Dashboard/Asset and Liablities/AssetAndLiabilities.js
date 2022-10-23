import { Box } from "@mui/system";
import React, { useContext } from "react";
import { IoIosSquare } from "react-icons/io";
import { AiFillCaretRight } from "react-icons/ai";
import "./AssetAndLiabilities.css";

import { DarkmodeEnable } from "../../../App";
const AssetAndLiabilities = () => {
  const { isDark } = useContext(DarkmodeEnable);

  return (
    <div style={{ width: "20%" }}>
      <Box
        sx={{
          p: 2,
          fontFamily: "Poppins",
          height: "400px",
          marginTop: "24px",
          marginLeft: "19px",
          background: `${isDark ? "#313341" : "white"}`,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.24)",

          borderRadius: "7px",
          textAlign: "left",
          color: "#003566",
        }}
      >
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginTop: "200px" }}>
            <p style={{ display: "flex" }}>
              <IoIosSquare
                style={{
                  fontSize: "25px",
                  color: "#74B18C",
                }}
              ></IoIosSquare>
              <span style={{ marginLeft: "5px", color: "#A5A5A5" }}>Asset</span>
            </p>
            <p style={{ display: "flex" }}>
              <IoIosSquare
                style={{
                  fontSize: "25px",
                  color: "#DC143C",
                }}
              ></IoIosSquare>
              <span style={{ marginLeft: "5px", color: "#A5A5A5" }}>
                Liablitties
              </span>
            </p>
            <p
              style={{
                marginTop: "26px",
                marginLeft: "5px",
                fontWeight: "500",
                color: `${isDark ? "white" : "#003566"}`,
              }}
            >
              Net Worth:
            </p>
            <p
              style={{
                marginLeft: "5px",
                fontSize: "22px",
                marginTop: "-10px",

                color: `${isDark ? "white" : "#003566"}`,

                fontWeight: "600",
              }}
            >
              ৳ 9,9900
            </p>
          </div>
          {/* Range Section */}

          <div
            style={{
              height: "300px",
              width: "17px",

              position: "relative",
            }}
          >
            <div
              className="liabilities"
              style={{ height: "20%", background: "#DC143C" }}
            >
              <p
                className="liabilities_amount"
                style={{
                  background: "#DC143C",
                  padding: "5px",
                  color: "white",
                  fontSize: "15px",
                }}
              >
                ৳ 10,000
                <AiFillCaretRight
                  className="arrow"
                  style={{
                    color: "#DC143C",
                  }}
                ></AiFillCaretRight>
              </p>
            </div>
            <div
              className="asset"
              style={{ height: "80%", background: "#74B18C" }}
            >
              <p
                className="asset_amount"
                style={{
                  background: "#74B18C",
                  padding: "5px",
                  color: "white",
                  fontSize: "15px",
                }}
              >
                ৳ 10,0000
                <AiFillCaretRight
                  className="arrow_asset"
                  style={{
                    color: "#74B18C",
                  }}
                ></AiFillCaretRight>
              </p>
            </div>
          </div>
        </section>
      </Box>
    </div>
  );
};

export default AssetAndLiabilities;

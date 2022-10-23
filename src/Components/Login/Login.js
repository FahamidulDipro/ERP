import { Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Logo from "../../Assets/logo/Logo.png";
import "./Login.css";
const Login = () => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            background: "#161A23",
            minHeight: "100vh",
            color: "white",
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <Box sx={{ marginBottom: "135px", marginTop: "30px" }}>
              <img src={Logo} width="130px" />
            </Box>
            <Typography sx={{ fontSize: "80px" }}>Welcome</Typography>
            <Typography sx={{ fontSize: "26px", mt: "10px", color: "#757979" }}>
              Register for an ERP Account here
            </Typography>
            <Typography sx={{ fontSize: "18px", mt: "20px", color: "#757979" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              dui tincidunt risus in. Mattis etiam eget fames at fermentum.
            </Typography>
            <Button
              sx={{
                background: "#003566",
                color: "white",
                borderRadius: "0",
                mt: "50px",
                "&:hover": {
                  background: "#003566",
                },
              }}
            >
              REGISTER HERE
            </Button>
            <Box
              sx={{
                mt: "100px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  mt: "10px",
                  color: "#757979",
                  ml: "120px",
                  cursor: "pointer",
                }}
              >
                CHOOSE LANGUAGE{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  mt: "10px",
                  color: "#757979",
                  ml: "20px",
                  cursor: "pointer",
                }}
              >
                HELP CENTER
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background: "#003566",
            minHeight: "100vh",
            color: "white",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "80%" }}>
            {" "}
            <Typography sx={{ fontSize: "35px" }}>
              Or login to your account
            </Typography>
            <Input
              placeholder="Email"
              autocomplete="off"
              type="email"
              sx={{
                width: "70%",
                mt: "30px",
                color: "white",
                borderBottom: "1px solid white",
              }}
            />
            <Input
              placeholder="Password"
              type="password"
              sx={{
                width: "70%",
                mt: "30px",
                color: "white",
                borderBottom: "1px solid white",
              }}
              autocomplete="off"
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                sx={{
                  background: "#161A23",
                  color: "white",
                  borderRadius: "0",
                  mt: "50px",
                  width: "150px",
                  "&:hover": {
                    background: "#161A23",
                  },
                }}
              >
                Login{" "}
              </Button>
              <span
                style={{
                  marginTop: "50px",
                  marginLeft: "20%",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                forget password ?
              </span>
            </Box>
            {/*  */}
            <Box sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  position: "absolute",
                  top: "200px",
                  right: "0",
                  color: "white",
                  ml: "120px",
                  cursor: "pointer",
                }}
              >
                @2022 FlyFar All right reserved{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

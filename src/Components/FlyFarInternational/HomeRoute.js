import {
  Button,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DarkmodeEnable } from "../../App";
import "./HomeRoute.css";
const HomeRoute = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const placeHolders = [
    {
      english: "Title Text English",
      bangla: "Title Text Bangla",
    },
  ];
  const services = [
    {
      serviceNo: "Service 01",
      placeholder: "Package Title Text English",
      value: "Trip to Sreemangal",
      detailPlaceholder: "Place to visit in English",
    },
    {
      serviceNo: "Service 02",
      placeholder: "Package Title Text English",
      value: "Trip to Sreemangal",
      detailPlaceholder: "Place to visit in English",
    },
    {
      serviceNo: "Service 03",
      placeholder: "Package Title Text English",
      value: "Trip to Sreemangal",
      detailPlaceholder: "Place to visit in English",
    },
    {
      serviceNo: "Service 04",
      placeholder: "Package Title Text English",
      value: "Trip to Sreemangal",
      detailPlaceholder: "Place to visit in English",
    },
  ];
  const footer = [
    {
      name: "About us",
    },
    {
      name: "Privacy Policy ",
    },
    {
      name: "Terms & Condition",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "Refund Policy",
    },
    {
      name: "Address",
    },
  ];
  return (
    <Box
      sx={{
        marginTop: "10px",
        width: "95%",
        minHeight: "100vh",
      }}
    >
      <Typography
        sx={{
          color: `${isDark ? "white" : "#212A41"}`,
          fontWeight: "600",
          my: "20px",
          fontSize: "20px",
        }}
      >
        Banner Section
      </Typography>
      <Box sx={{}}>
        {placeHolders.map((p) => (
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <TextField
                placeholder={`${p.english}`}
                id="outlined-basic"
                variant="outlined"
                size="small"
                className={`${isDark ? "input_dark" : "input_light"}`}
                sx={{
                  "& fieldset": { border: "none" },
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                placeholder={`${p.bangla}`}
                id="outlined-basic"
                variant="outlined"
                size="small"
                className={`${isDark ? "input_dark" : "input_light"}`}
                sx={{
                  "& fieldset": { border: "none" },
                  width: "100%",
                  //   padding: "5px 2px 5px 10px",
                }}
              />
            </Grid>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "20px",
                ml: "20px",
              }}
            >
              <Button className="selected_ladies">Add</Button>
            </Box>
          </Grid>
        ))}
      </Box>
      <Typography
        sx={{
          color: `${isDark ? "white" : "#212A41"}`,
          fontWeight: "600",
          my: "20px",
          fontSize: "20px",
        }}
      >
        Service Section{" "}
      </Typography>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <TextField
              placeholder="Short Title light Text "
              id="outlined-basic"
              variant="outlined"
              size="small"
              className={`${isDark ? "input_dark" : "input_light"}`}
              sx={{
                "& fieldset": { border: "none" },
                width: "100%",
              }}
            />
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "38px",
              ml: "20px",
            }}
          >
            <Button
              sx={{
                background: "#70a5d8",
                "&:hover": {
                  background: "#70a5d8",
                },
                borderRadius: "0",
                color: "white",
                width: "150px",
              }}
            >
              Update
            </Button>
          </Box>
          <Grid item xs={3}>
            <TextField
              placeholder="Short Title light Text "
              id="outlined-basic"
              variant="outlined"
              size="small"
              className={`${isDark ? "input_dark" : "input_light"}`}
              sx={{
                "& fieldset": { border: "none" },
                width: "100%",
              }}
            />
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "38px",
              ml: "20px",
            }}
          >
            <Button
              sx={{
                background: "#70a5d8",
                "&:hover": {
                  background: "#70a5d8",
                },
                borderRadius: "0",
                color: "white",
                width: "150px",
              }}
            >
              Update
            </Button>
          </Box>
        </Grid>
      </Box>
      {/* Services */}
      <Box sx={{ mt: "50px" }}>
        <Grid container spacing={3}>
          {services.map((s) => (
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: "600", color: "#70A5D8" }}>
                {s.serviceNo}
              </Typography>
              <Box>
                {" "}
                <TextField
                  placeholder={`${s.placeholder}`}
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className={`${isDark ? "input_dark" : "input_light"}`}
                  sx={{
                    "& fieldset": { border: "none" },
                    mt: "20px",
                    width: "300px",
                  }}
                />
              </Box>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                placeholder={`${s.detailPlaceholder}`}
                style={{
                  width: 400,
                  height: 150,
                  marginTop: "20px",
                  padding: "10px",
                  background: `${isDark ? "#313341" : "white"}`,
                  border: `1px solid ${isDark ? "white" : "#003566"}`,
                  resize: "none",
                }}
              />
              <Button
                sx={{
                  background: "#70a5d8",
                  "&:hover": {
                    background: "#70a5d8",
                  },
                  borderRadius: "0",
                  color: "white",
                  width: "150px",
                  my: "20px",
                }}
              >
                Update
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Choose Us Section */}
      <Typography
        sx={{
          color: `${isDark ? "white" : "#212A41"}`,
          fontWeight: "600",
          my: "20px",
          fontSize: "20px",
        }}
      >
        Choose US Section
      </Typography>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <TextField
              placeholder="Short Title light Text "
              id="outlined-basic"
              variant="outlined"
              size="small"
              className={`${isDark ? "input_dark" : "input_light"}`}
              sx={{
                "& fieldset": { border: "none" },
                width: "100%",
              }}
            />
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "38px",
              ml: "20px",
            }}
          >
            <Button
              sx={{
                background: "#70a5d8",
                "&:hover": {
                  background: "#70a5d8",
                },
                borderRadius: "0",
                color: "white",
                width: "150px",
              }}
            >
              Update
            </Button>
          </Box>
          <Grid item xs={3}>
            <TextField
              placeholder="Short Title light Text "
              id="outlined-basic"
              variant="outlined"
              size="small"
              className={`${isDark ? "input_dark" : "input_light"}`}
              sx={{
                "& fieldset": { border: "none" },
                width: "100%",
              }}
            />
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "38px",
              ml: "20px",
            }}
          >
            <Button
              sx={{
                background: "#70a5d8",
                "&:hover": {
                  background: "#70a5d8",
                },
                borderRadius: "0",
                color: "white",
                width: "150px",
              }}
            >
              Update
            </Button>
          </Box>
        </Grid>
        <TextareaAutosize
          placeholder="Place to visit in English"
          aria-label="minimum height"
          minRows={4}
          style={{
            width: 460,
            height: 150,
            marginTop: "20px",
            padding: "10px",
            background: `${isDark ? "#313341" : "white"}`,
            border: `1px solid ${isDark ? "white" : "#003566"}`,
            resize: "none",
          }}
        />
        <Box>
          <Button
            sx={{
              background: "#70a5d8",
              "&:hover": {
                background: "#70a5d8",
              },
              borderRadius: "0",
              color: "white",
              width: "150px",
              my: "20px",
            }}
          >
            Update
          </Button>
        </Box>
      </Box>
      {/* Footer Section Section */}
      <Typography
        sx={{
          color: `${isDark ? "white" : "#212A41"}`,
          fontWeight: "600",
          my: "20px",
          fontSize: "20px",
        }}
      >
        Footer Section
      </Typography>
      <Box>
        {footer.map((f) => (
          <>
            {" "}
            <TextareaAutosize
              placeholder="Place to visit in English"
              aria-label="minimum height"
              minRows={4}
              style={{
                width: 400,
                height: 150,
                marginTop: "20px",
                padding: "10px",
                resize: "none",
                background: `${isDark ? "#313341" : "white"}`,
                border: `1px solid ${isDark ? "white" : "#003566"}`,
              }}
            />
            <Button
              sx={{
                background: "#70a5d8",
                "&:hover": {
                  background: "#70a5d8",
                },
                borderRadius: "0",
                color: "white",
                width: "150px",
                mb: "20px",
                mt: "-10px",
                ml: "20px",
                mr: "20px",
              }}
            >
              Update
            </Button>
          </>
        ))}
      </Box>
      {/* Payment method Section */}
      <Typography
        sx={{
          color: `${isDark ? "white" : "#212A41"}`,
          fontWeight: "600",
          my: "20px",
          fontSize: "20px",
        }}
      >
        Payment method{" "}
      </Typography>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <TextField
              placeholder="Bank Name"
              id="outlined-basic"
              variant="outlined"
              size="small"
              className={`${isDark ? "input_dark" : "input_light"}`}
              sx={{
                "& fieldset": { border: "none" },
                width: "100%",
              }}
            />
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "38px",
              ml: "20px",
            }}
          >
            <Button
              sx={{
                background: "#70a5d8",
                "&:hover": {
                  background: "#70a5d8",
                },
                borderRadius: "0",
                color: "white",
                width: "150px",
              }}
            >
              Update
            </Button>
          </Box>
          <Grid item xs={3}>
            <TextField
              placeholder="Account Details"
              id="outlined-basic"
              variant="outlined"
              size="small"
              className={`${isDark ? "input_dark" : "input_light"}`}
              sx={{
                "& fieldset": { border: "none" },
                width: "100%",
              }}
            />
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "38px",
              ml: "20px",
            }}
          >
            <Button
              sx={{
                background: "#70a5d8",
                "&:hover": {
                  background: "#70a5d8",
                },
                borderRadius: "0",
                color: "white",
                width: "150px",
              }}
            >
              Update
            </Button>
          </Box>
        </Grid>
        <TextareaAutosize
          placeholder="Place to visit in English"
          aria-label="minimum height"
          minRows={4}
          style={{
            width: 460,
            height: 150,
            marginTop: "20px",
            padding: "10px",
            background: `${isDark ? "#313341" : "white"}`,
            border: `1px solid ${isDark ? "white" : "#003566"}`,
            resize: "none",
          }}
        />
        <Box>
          <Button
            sx={{
              background: "#70a5d8",
              "&:hover": {
                background: "#70a5d8",
              },
              borderRadius: "0",
              color: "white",
              width: "150px",
              my: "20px",
            }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeRoute;

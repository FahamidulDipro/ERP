import { Box, Grid, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Pagination from "@mui/material/Pagination";
import Swal from "sweetalert2";
import "./Airlines.css";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Airlines = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [ticketDetails, setTicketDetail] = useState([]);

  const handleOpen = async () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [airData, setAirData] = useState([]);
  const [mainAirData, setMainAirData] = useState([]);

  // Sets the state of the const for the given page and state.
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  let size = 20;

  // Handle a page change.
  const handlePageChange = (event, value) => {
    setPage(value);
    setMainAirData(airData.slice((value - 1) * size, value * size));
  };

  useEffect(() => {
    fetch("https://api.flyfarint.com/v.1.0.0/Admin/Airlines/all.php?all")
      .then((res) => res.json())
      .then((data) => {
        const count = data.length;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        setAirData(data);
        setMainAirData(data);
      });
  }, []);

  //  airlines  add  functionality handle here
  const [airlineCode, setAirLineCode] = useState("");
  const [airNameEng, setAirNameEng] = useState("");
  const [airNameBng, setAirNameBng] = useState("");
  const [airCommission, setAirCommission] = useState("");

  const airDataPost = async (e) => {
    let url = "https://api.flyfarint.com/v.1.0.0/Admin/Airlines/add.php";

    let body = JSON.stringify({
      code: airlineCode,
      nameEnglish: airNameEng,
      nameBangla: airNameBng,
      commission: airCommission,
    });
    
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "sucess") {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Updated Successfully",
            confirmButtonText: "ok",
          }).then(function () {
            navigate(0);
          });
        }
      });
    handleClose(false);
  };

  // delete functionality handle here
  const deleteRequest = (id) => {
    fetch(
      `https://api.flyfarint.com/v.1.0.0/Admin/Airlines/delete.php?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "sucess") {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Delete Successfully",
            confirmButtonText: "ok",
          }).then(function () {
            navigate(0);
          });
        }
      });
  };

  // update function handle here

  const [Updateopen, setUpdateOpen] = React.useState(false);
  const [updateAirCode, setUpdateAirCode] = useState("");
  const [updateAirNameEng, setUpdateAirNameEng] = useState("");
  const [updateAirNameBng, setUpdateAirNameBng] = useState("");
  const [updateAirCom, setUpdateAirCom] = useState("");
  const [airId, setAirId] = useState("");

  const UpdateHandleOpen = async (id) => {
    setUpdateOpen(true);
    fetch(`https://api.flyfarint.com/v.1.0.0/Admin/Airlines/all.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateAirCode(data[0].code);
        setUpdateAirNameEng(data[0].name);
        setUpdateAirNameBng(data[0].nameBangla);
        setUpdateAirCom(data[0].commission);
        setAirId(id);
      });
  };

  const updateDataSave = async () => {
    let url = `https://api.flyfarint.com/v.1.0.0/Admin/Airlines/edit.php?id=${airId}`;
    let body = JSON.stringify({
      code: updateAirCode,
      nameEnglish: updateAirNameEng,
      nameBangla: updateAirNameBng,
      commission: updateAirCom,
    });
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "sucess") {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Updated Successfully",
            confirmButtonText: "ok",
          }).then(function () {
            navigate(0);
          });
        }
      });
    UpdateHandleClose(false);
  };

  const UpdateHandleClose = () => {
    setUpdateOpen(false);
  };

  return (
    <Box style={{ width: "97%" }}>
      <Box mt={3}>
        <Grid container>
          <Grid md={4}>
            <Box>
              <Typography
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Airlines
              </Typography>
            </Box>
          </Grid>
          <Grid md={8} display="flex" justifyContent={"flex-end"}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box>
                <button
                  style={{
                    cursor: "pointer",
                    fontSize: "15px",
                    border: "none",
                    height: "30px",
                    backgroundColor: "#003566",
                    color: "#fff",
                    padding: "0px 22px",
                  }}
                  onClick={() => handleOpen()}
                >
                  Add Airlines
                </button>
              </Box>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box
                  sx={{ ...style, width: 500 }}
                  style={{ border: "none", borderRadius: "5px" }}
                >
                  <Box className="airlinePnr1" mb={2}>
                    <label>Airline Code:</label>
                    <br></br>
                    <input
                      style={{
                        marginLeft: "0px",
                        marginTop: "5px",
                        width: "100%",
                      }}
                      required
                      type="text"
                      name="airlinePnr"
                      placeholder="AA"
                      onChange={(e) => setAirLineCode(e.target.value)}
                    />
                  </Box>
                  <Box className="airlinePnr1" mb={2}>
                    <label>Airline Name:</label>
                    <br></br>
                    <input
                      style={{
                        marginLeft: "0px",
                        marginTop: "5px",
                        width: "100%",
                      }}
                      required
                      type="text"
                      placeholder="American Airlines"
                      name="airlinePnr"
                      onChange={(e) => setAirNameEng(e.target.value)}
                    />
                  </Box>
                  <Box className="airlinePnr1" mb={2}>
                    <label>Airline Bengali Name:</label> <br></br>
                    <input
                      style={{
                        marginLeft: "0px",
                        marginTop: "5px",
                        width: "100%",
                      }}
                      required
                      type="text"
                      placeholder="আমেরিকান এয়ারলাইন্স"
                      name="airlinePnr"
                      onChange={(e) => setAirNameBng(e.target.value)}
                    />
                  </Box>
                  <Box className="airlinePnr1" mb={2}>
                    <label>Commission:</label> <br></br>
                    <input
                      style={{
                        marginLeft: "0px",
                        marginTop: "5px",
                        width: "100%",
                      }}
                      required
                      type="text"
                      placeholder="commission"
                      name="airlinePnr"
                      onChange={(e) => setAirCommission(e.target.value)}
                    />
                  </Box>

                  <Box className="balance-transaction">
                    <Box className="saveBtn1" mt={2}>
                      <button onClick={airDataPost}>Save</button>
                    </Box>
                  </Box>
                </Box>
              </Modal>
              <Box className="airlineBtn1">
                <input type="text" placeholder="search" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className="balance-transaction" marginTop={"20px"}>
        <table>
          <tr>
            <th>Airlines Code</th>
            <th>Airlines Name</th>
            <th>Airlines Bengali Name</th>

            <th style={{ textAlign: "right", paddingRight: "12px" }}>
              Action{" "}
            </th>
          </tr>

          {mainAirData?.slice(0, size).map((data) => (
            <>
              <tr>
                <td>{data?.code}</td>
                <td>{data?.name}</td>
                <td>{data?.nameBangla}</td>

                <td style={{ textAlign: "right" }}>
                  <Box>
                    <button
                      style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        border: "none",
                        height: "24px",
                        backgroundColor: "#003566",
                        color: "#fff",
                        padding: "0px 22px",
                        marginRight: "10px",
                      }}
                      onClick={() => UpdateHandleOpen(data?.id)}
                    >
                      Update
                    </button>
                    <button
                      style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        border: "none",
                        height: "24px",
                        backgroundColor: "#003566",
                        color: "#fff",
                        padding: "0px 22px",
                      }}
                      onClick={() => deleteRequest(data?.id)}
                    >
                      Delate
                    </button>
                  </Box>
                </td>
              </tr>
            </>
          ))}
        </table>

        {/* update modal */}
        <Box>
          <Modal
            open={Updateopen}
            onClose={UpdateHandleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box
              sx={{ ...style, width: 500 }}
              style={{ border: "none", borderRadius: "5px" }}
            >
              <Box className="airlinePnr1" mb={2}>
                <label>Airline Code:</label>
                <br></br>
                <input
                  style={{
                    marginLeft: "0px",
                    marginTop: "5px",
                    width: "100%",
                  }}
                  required
                  type="text"
                  value={updateAirCode}
                  onChange={(e) => {
                    setUpdateAirCode(e.target.value);
                  }}
                />
              </Box>
              <Box className="airlinePnr1" mb={2}>
                <label>Airline Name:</label>
                <br></br>
                <input
                  style={{
                    marginLeft: "0px",
                    marginTop: "5px",
                    width: "100%",
                  }}
                  required
                  type="text"
                  value={updateAirNameEng}
                  onChange={(e) => {
                    setUpdateAirNameEng(e.target.value);
                  }}
                />
              </Box>
              <Box className="airlinePnr1" mb={2}>
                <label>Airline Bengali Name:</label> <br></br>
                <input
                  style={{
                    marginLeft: "0px",
                    marginTop: "5px",
                    width: "100%",
                  }}
                  required
                  type="text"
                  value={updateAirNameBng}
                  onChange={(e) => {
                    setUpdateAirNameBng(e.target.value);
                  }}
                />
              </Box>
              <Box className="airlinePnr1" mb={2}>
                <label>Commission:</label> <br></br>
                <input
                  style={{
                    marginLeft: "0px",
                    marginTop: "5px",
                    width: "100%",
                  }}
                  required
                  type="text"
                  value={updateAirCom}
                  onChange={(e) => {
                    setUpdateAirCom(e.target.value);
                  }}
                />
              </Box>

              <Box className="balance-transaction">
                <Box className="saveBtn1" mt={2}>
                  <button onClick={updateDataSave}>Update</button>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
        {/* update modal end */}

        <Box
          sx={{
            width: "100%",
            my: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              onChange={handlePageChange}
              shape="rounded"
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Airlines;

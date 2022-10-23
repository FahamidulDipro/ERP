import { Box } from "@mui/material";
import commaNumber from "comma-number";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Modal from "@mui/material/Modal";

import "./Ticketing.css";
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

const Ticketing = () => {
  const navigate = useNavigate();
  const [ticketInfos, setTicketInfo] = useState([]);
  useEffect(() => {
    fetch("https://api.flyfarint.com/v.1.0.0/Admin/Ticketing/all.php?all")
      .then((res) => res.json())
      .then((data) => setTicketInfo(data));
  }, []);

  //    ticket modal function handle and ticket details data fetch

  const [open, setOpen] = React.useState(false);
  const [ticketDetails, setTicketDetail] = useState([]);
  const handleOpen = async (ticketId, bookingId) => {
    setOpen(true);

    await fetch(
      `https://api.flyfarint.com/v.1.0.0/Admin/Ticketing/ticketingDetails.php?ticketId=${ticketId}&bookingId=${bookingId}`
    )
      .then((res) => res.json())
      .then((data) => setTicketDetail(data));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [airlinePnr, setAirlinePnr] = useState("");
  //   console.log(eticketValue);

  const dataSend = () => {
    console.log(ticketDetails);
    const travelers = ticketDetails.map((item) => {
      return {
        ticketno: item.eTicketNo,
        passengerName: item.fname + " " + item.lname,
        passportno: item.passportno,
        pType: item.type,
        gender: item.gender,
      };
    });
    let body = {
      bookingId: ticketDetails[0].bookingId,
      ticketId: ticketDetails[0].ticketId,
      airlinePnr: airlinePnr,
      pax: ticketDetails.length,
      traveller: travelers,
    };
    fetch("https://api.flyfarint.com/v.1.0.0/Admin/Ticketing/ticketed.php", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.status === "success") {
          handleClose();
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Ticketed Successfully",
            confirmButtonText: "ok",
          }).then(function () {
            navigate(0);
          });
        }
      });
    console.log(JSON.stringify(body));
  };

  return (
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
      <Box
        style={{ width: "98% " }}
        className="balance-transaction"
        marginTop={"20px"}
      >
        <table>
          <tr>
            <th>Refference</th>
            <th>GDS</th>
            <th>Departure & Arrival </th>
            <th>Date</th>
            <th>Airlines </th>
            <th>PAX </th>
            <th>Company Name</th>
            <th>PNR</th>
            <th>Invoice Amount</th>
            <th>Action</th>
          </tr>

          {ticketInfos.map((ticketInfo) => (
            <tr>
              <td>{ticketInfo.ticketId}</td>
              <td>{ticketInfo.gds}</td>
              <td>{ticketInfo.route}</td>
              <td>{ticketInfo.created}</td>
              <td>{ticketInfo.airlines}</td>
              <td>{ticketInfo.pax}</td>
              <td>{ticketInfo.company}</td>
              <td>{ticketInfo.pnr}</td>
              <td>{commaNumber(ticketInfo.netCost)} BDT</td>

              <td>
                <Box className="ticketBtn1">
                  <button
                    onClick={() =>
                      handleOpen(ticketInfo.ticketId, ticketInfo.bookingId)
                    }
                  >
                    Ticket
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                  >
                    <Box
                      sx={{ ...style, width: 900 }}
                      style={{ border: "none", borderRadius: "5px" }}
                    >
                      <Box className="airlinePnr1" mb={2}>
                        <label>Airline PNR:</label>
                        <input
                          required
                          type="text"
                          placeholder="Enter"
                          name="airlinePnr"
                          onChange={(e) => {
                            const value = e.target.value;
                            const name = e.target.name;
                            setAirlinePnr(value);
                          }}
                        />
                      </Box>

                      <Box className="balance-transaction">
                        <table>
                          <tr>
                            <th>Ticket Id</th>
                            <th>Booking Id</th>
                            <th>Passenger Name </th>
                            <th>Type</th>
                            <th>Passport No </th>
                            <th>Gender </th>
                            <th>Eticket No</th>
                            <th>Edit</th>
                          </tr>
                          {ticketDetails.map((ticketDetail, index) => (
                            <tr>
                              <td>{ticketDetail.ticketId}</td>
                              <td>{ticketDetail.bookingId}</td>
                              <td>
                                {ticketDetail.fname} {ticketDetail.lname}
                              </td>
                              <td>{ticketDetail.type}</td>
                              <td>{ticketDetail.passportno}</td>
                              <td>{ticketDetail.gender}</td>
                              <td>
                                <input
                                  required
                                  name="eTicketNo"
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    const name = e.target.name;

                                    const tempData = [...ticketDetails];
                                    if (index !== -1) {
                                      tempData[index] = {
                                        ...tempData[index],
                                        [name]: value,
                                      };
                                    }
                                    setTicketDetail(tempData);
                                  }}
                                  type="text"
                                />
                              </td>
                              <td>edit</td>
                            </tr>
                          ))}
                        </table>
                        <Box className="saveBtn1" mt={2}>
                          <button onClick={() => dataSend()}>Save</button>
                        </Box>
                      </Box>
                    </Box>
                  </Modal>
                </Box>
              </td>
            </tr>
          ))}
        </table>
      </Box>
    </Box>
  );
};

export default Ticketing;

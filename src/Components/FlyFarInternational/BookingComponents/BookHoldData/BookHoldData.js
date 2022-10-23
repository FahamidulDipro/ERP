import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useRef, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import commaNumber from "comma-number";
import Swal from "sweetalert2";
import "./BookHoldData.css";

const BookHoldData = () => {
  const navigate = useNavigate();
  //  handle accordion function
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [expanded, setExpanded] = React.useState("panel1");
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const {
    bookingId,
    invoiceId,
    agentId,
    staffId,
    email,
    phone,
    PersonName,
    pnr,
    tripType,
    pax,
    adultCount,
    childCount,
    infantCount,
    netCost,
    adultCostBase,
    childCostBase,
    infantCostBase,
    adultCostTax,
    childCostTax,
    infantCostTax,
    grossCost,
    baseFare,
    Tax,
    deptFrom,
    airlines,
    arriveTo,
    gds,
    statusType,
    dateTime,
    issueTime,
    timeLimit,
  } = location?.state;

  //  adult, child, infant cost calculation

  const adultCountInt = parseInt(adultCount);
  const childCountInt = parseInt(childCount);
  const infantCountInt = parseInt(infantCount);

  const adultTotalCost = parseInt(adultCostBase) + parseInt(adultCostTax);
  const childTotalCost = parseInt(childCostBase) + parseInt(childCostTax);
  const infantTotalCost = parseInt(infantCostBase) + parseInt(infantCostTax);

  const commission = parseInt(grossCost) - parseInt(netCost);

  //  agent data fetch
  const [agentInfo, setAgentInfo] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.flyfarint.com/v.1.0.0/Admin/Agent/allAgent.php?agentId=${agentId}`
    )
      .then((res) => res.json())
      .then((data) => setAgentInfo(data[0]));
  }, []);

  //  staff data fetch
  const [staffInfo, setStaffInfo] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.flyfarint.com/v.1.0.0/Admin/Agent/staffList.php?staffId=${staffId}`
    )
      .then((res) => res.json())
      .then((data) => setStaffInfo(data[0]));
  }, []);

  // fetch flight data
  const [flightData, setFlightData] = useState([]);
  console.log(flightData);

  useEffect(() => {
    fetch(
      `https://api.flyfarint.com/v.1.0.0/${gds}/AirRetrieve.php?BookingID=${pnr}`
    )
      .then((res) => res.json())
      .then((data) => setFlightData(data));
  }, []);

  // booking cancel function handle
  const [isLoading, setIsLoading] = useState(false);
  const cancelBooking = (gds, pnr) => {
    setOpen(false);
    Swal.fire({
      title: "Are you sure?",
      text: "You Wants to Cancel this Flight ?",
      icon: "warning",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#003566",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, Cancel it!",
    }).then((willDelete) => {
      if (willDelete.isConfirmed) {
        Swal.fire("Your Flight is Cancel Successfully !", {
          icon: "success",
        }).then(async function () {
          setIsLoading(true);
          await fetch(
            `https://api.flyfarint.com/v.1.0.0/${gds}/AirCancel.php?BookingID=${pnr}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              if (
                data?.request?.cancelAll === true ||
                data?.BookingStatus === "Cancelled"
              ) {
                navigate("/manageWebsite/www.flyfarint.com/booking/hold");
              } else {
                Swal.fire({
                  title: "There is a problem",
                  icon: "error",
                  button: "Done!",
                });
              }
              setIsLoading(false);
            });
        });
      }
    });
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
      <Container className="queues-detail-parent" maxWidth="xxl">
        <Box>
          <Grid container spacing={2}>
            <Grid item md={9.5}>
              <Box className="queues-detail">
                <Box>
                  <h2>Reference ID:{bookingId}</h2>
                </Box>
                <Grid
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  container
                >
                  <Grid xs={6} md={3}>
                    <h5>
                      GDS: <span>{gds}</span>
                    </h5>
                  </Grid>
                  <Grid xs={6} md={3}>
                    <h5>
                      Airlines PNR: <span>{pnr}</span>
                    </h5>
                  </Grid>
                  <Grid xs={6} md={3}>
                    <h5>
                      System PNR: <span>{pnr}</span>
                    </h5>
                  </Grid>

                  <Grid
                    xs={3}
                    display={"flex"}
                    justifyContent={"flex-end"}
                    md={3}
                  >
                    <Box>
                      <button style={{ width: "207px" }}>{statusType}</button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              {/* --------------- Booking confirmation--------------------------- */}

              <Box
                mt={2}
                className="queues-detail-bookingInfo"
                style={{ marginBottom: "30px" }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#d1e9ff",
                    borderRadius: "2px",
                  }}
                >
                  <span>Booking Confirmation</span>
                  <span>Timer</span>
                </Box>
                <Grid mt={1} container>
                  <Grid item xs={12} md={6}>
                    <Box
                      display={"flex"}
                      gap="20px"
                      style={{ paddingLeft: "10px" }}
                    >
                      <Box>
                        <h5 style={{ fontSize: "15px" }}>Destination:</h5>
                        <h5>Client:</h5>
                        <h5>Agent Name:</h5>
                        <h5>Booked by:</h5>
                        <h5>Booked at:</h5>
                      </Box>

                      <Box>
                        <h5
                          style={{
                            color: "#003566",
                            fontWeight: "500",
                            fontSize: "15px",
                          }}
                        >
                          {deptFrom} - {arriveTo}
                        </h5>
                        <h5>
                          {agentInfo?.company
                            ? agentInfo?.company
                            : "Fly Far International"}{" "}
                        </h5>
                        <h5>
                          {agentInfo?.name ? agentInfo?.name : "Mehedi Hasan"}
                        </h5>
                        <h5>{staffInfo?.name}</h5>
                        <h5>{staffInfo?.created}</h5>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* ------------- FLight Information start ---------------------------- */}

              {/* for Sabre */}
              {gds === "Sabre" && (
                <Box
                  mt={2}
                  className="queue-detail-fareInfo"
                  style={{ marginBottom: "30px" }}
                >
                  <span>Flight Information</span>
                  {flightData?.flights ? (
                    <Box mt={2}>
                      <Box display={{ xs: "none", sm: "none", lg: "flex" }}>
                        <table>
                          <tr>
                            <th>Flight Seg</th>
                            <th>Flight No </th>
                            <th>Career Name </th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Class</th>
                          </tr>

                          {flightData?.flights?.map((flight) => (
                            <tr>
                              <td>
                                {flight?.fromAirportCode} -{" "}
                                {flight?.toAirportCode}
                              </td>
                              <td>
                                {flight?.airlineCode} {flight?.aircraftTypeCode}
                              </td>
                              <td>{flight?.aircraftTypeName}</td>
                              <td>
                                {flight?.departureDate} {flight?.departureTime}
                              </td>
                              <td>
                                {flight?.arrivalDate} {flight?.arrivalTime}
                              </td>
                              <td>{flight?.cabinTypeName} </td>
                            </tr>
                          ))}
                        </table>
                      </Box>

                      <Box display={{ xs: "block", sm: "block", lg: "none" }}>
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          className="queue-detail-mobile-box"
                        >
                          <Box>
                            <h6>Flight Seg</h6>
                            <h6>Flight No</h6>
                            <h6>Career name</h6>
                            <h6>Departure</h6>
                            <h6>Arrival</h6>
                            <h6>Arrival Terminal</h6>
                            <h6>Class</h6>
                            <h6>Seat</h6>
                            <h6>Meal</h6>
                          </Box>
                          <Box className="queue-detail-mobile-box-result">
                            <h6>Dhaka - Dubai</h6>
                            <h6>A40</h6>
                            <h6>5000</h6>
                            <h6>0</h6>
                            <h6>5000</h6>
                            <h6>2</h6>
                            <h6>2</h6>
                            <h6>85000 BDT</h6>
                            <h6>85000 BDT </h6>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    "Please wait ......."
                  )}
                </Box>
              )}

              {/* for Flyhub */}
              {gds === "FlyHub" && (
                <Box
                  mt={2}
                  className="queue-detail-fareInfo"
                  style={{ marginBottom: "30px" }}
                >
                  <span>Flight Information</span>
                  {flightData?.Results ? (
                    <Box mt={2}>
                      <Box display={{ xs: "none", sm: "none", lg: "flex" }}>
                        <table>
                          <tr>
                            <th>Flight Seg</th>
                            <th>Flight No </th>
                            <th>Career Name </th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Class</th>
                          </tr>

                          {flightData?.Results &&
                            flightData?.Results[0]?.segments?.map((flight) => (
                              <tr>
                                <td>
                                  {flight?.Origin?.Airport?.CityName} -{" "}
                                  {flight?.Destination?.Airport?.CityName}
                                </td>
                                <td>
                                  {flight?.Airline?.AirlineCode}{" "}
                                  {flight?.Airline?.FlightNumber}
                                </td>
                                <td>{flight?.Airline?.AirlineName}</td>
                                <td>{flight?.Origin?.DepTime}</td>
                                <td>{flight?.Destination?.ArrTime}</td>
                                <td>Economy </td>
                              </tr>
                            ))}
                        </table>
                      </Box>

                      <Box display={{ xs: "block", sm: "block", lg: "none" }}>
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          className="queue-detail-mobile-box"
                        >
                          <Box>
                            <h6>Flight Seg</h6>
                            <h6>Flight No</h6>
                            <h6>Career name</h6>
                            <h6>Departure</h6>
                            <h6>Arrival</h6>
                            <h6>Arrival Terminal</h6>
                            <h6>Class</h6>
                            <h6>Seat</h6>
                            <h6>Meal</h6>
                          </Box>
                          <Box className="queue-detail-mobile-box-result">
                            <h6>Dhaka - Dubai</h6>
                            <h6>A40</h6>
                            <h6>5000</h6>
                            <h6>0</h6>
                            <h6>5000</h6>
                            <h6>2</h6>
                            <h6>2</h6>
                            <h6>85000 BDT</h6>
                            <h6>85000 BDT </h6>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    "please wait for Flyhub data  ......."
                  )}
                </Box>
              )}
              {/*----------------- flight information end ----------------------------*/}

              {/*---------------------------- Fare details ----------------------------*/}
              <Box mt={2} className="queue-detail-fareInfo">
                <span>Fare Details</span>

                <Box mt={2}>
                  <Box display={{ xs: "none", sm: "none", lg: "flex" }}>
                    <table>
                      <tr>
                        <th>Passenger</th>
                        <th>Baggage </th>
                        <th>Base Fare</th>
                        <th>TAX </th>
                        <th>Total Fare</th>
                      </tr>

                      {adultCountInt >= 1 && (
                        <tr>
                          <td>Adult X{adultCountInt}</td>
                          <td></td>
                          <td>{commaNumber(adultCostBase)} BDT</td>
                          <td>{commaNumber(adultCostTax)} BDT</td>
                          <td>{commaNumber(adultTotalCost)} BDT</td>
                        </tr>
                      )}

                      {childCountInt >= 1 && (
                        <tr>
                          <td>Child X{childCountInt}</td>
                          <td></td>
                          <td>{commaNumber(childCostBase)} BDT</td>
                          <td>{commaNumber(childCostTax)} BDT</td>
                          <td>{commaNumber(childTotalCost)} BDT</td>
                        </tr>
                      )}
                      {infantCountInt >= 1 && (
                        <tr>
                          <td>Infant X{infantCountInt}</td>
                          <td></td>
                          <td>{commaNumber(infantCostBase)} BDT</td>
                          <td>{commaNumber(infantCostTax)} BDT</td>
                          <td>{commaNumber(infantTotalCost)} BDT</td>
                        </tr>
                      )}

                      <tr>
                        <td colSpan={"2"} style={{ color: "#DC143C" }}>
                          Agent Commission:
                          <bold style={{ padding: "0px 10px" }}>
                            {commaNumber(commission)} BDT
                          </bold>{" "}
                        </td>

                        <td colSpan={"2"}>
                          Agent Total:
                          <bold style={{ paddingLeft: "10px" }}>
                            {commaNumber(netCost)} BDT
                          </bold>
                        </td>

                        <td colSpan={"2"}>
                          Customer Total:
                          <bold style={{ paddingLeft: "10px" }}>
                            {commaNumber(grossCost)} BDT
                          </bold>
                        </td>
                      </tr>
                    </table>
                  </Box>

                  {/*  For mobile and tab */}

                  <Box display={{ xs: "block", sm: "block", lg: "none" }}>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      className="queue-detail-mobile-box"
                    >
                      <Box>
                        <h6>Passenger</h6>
                        <h6>Baggage</h6>
                        <h6>Base Fare</h6>
                        <h6>TAX </h6>
                        <h6>Total Fare</h6>
                        <h6 style={{ marginTop: "10px", color: "#DC143C" }}>
                          Agent Commission
                        </h6>
                        <h6>Agent Total</h6>
                        <h6>Customer Total </h6>
                      </Box>
                      <Box className="queue-detail-mobile-box-result">
                        <h6>Adult</h6>
                        <h6>85,000</h6>
                        <h6>5000</h6>
                        <h6>0</h6>
                        <h6>5000</h6>
                        <h6>2</h6>
                        <h6 style={{ margin: "20px 0px" }}>79,000 BDT</h6>
                        <h6 style={{ marginTop: "10px", color: "#DC143C" }}>
                          7000 BDT{" "}
                        </h6>
                        <h6>85000 BDT</h6>
                        <h6>85000 BDT </h6>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/*---------------------------- Fare details end ----------------------------*/}

              {/* --------------------- passenger details accordion start ------------------- */}
              {/* For Sabre */}
              {gds === "Sabre" && (
                <Box mt={5} className="queue-detail-passenger-detail">
                  <Box my={2}>
                    <span>Passenger Details</span>
                  </Box>
                  {flightData?.endDate ? (
                    <div>
                      {flightData?.travelers.map((flightData) => (
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                          style={{
                            border: "1px solid #C4C4C4",
                            boxShadow: "none",
                            overflow: "hidden",
                          }}
                        >
                          <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                            sx={{
                              borderBottom: "1px solid #DEDEDE",
                              height: "0px !important",
                            }}
                          >
                            <Box
                              display={"flex"}
                              justifyContent={"space-between"}
                              width={"100%"}
                            >
                              <h5
                                style={{
                                  color: "#003566",
                                  fontWeight: "500",
                                  fontSize: "13px",
                                }}
                              >
                                {flightData?.givenName} {flightData?.surname}
                              </h5>
                            </Box>
                          </AccordionSummary>

                          <AccordionDetails>
                            <Grid container spacing={2}>
                              <Grid item xs={4} md={2}>
                                <h5>Nationality</h5>
                                <h6>
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]
                                        ?.issuingCountryCode
                                    : "Domestic"}
                                </h6>
                              </Grid>

                              <Grid item xs={4} md={2.5}>
                                <h5>Date of Birth</h5>
                                <h6>
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]
                                        ?.birthDate
                                    : "Domestic"}
                                </h6>
                              </Grid>

                              <Grid item xs={4} md={2.5}>
                                <h5>Gender</h5>
                                <h6>
                                  {" "}
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]?.gender
                                    : "Domestic"}
                                </h6>
                              </Grid>

                              <Grid item xs={6} md={2.5}>
                                <h5>Passport Number</h5>
                                <h6>
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]
                                        ?.documentNumber
                                    : "Domestic"}
                                </h6>
                              </Grid>
                              <Grid item xs={6} md={2.5}>
                                <h5>Passport Expire Date</h5>
                                <h6>
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]
                                        ?.expiryDate
                                    : "Domestic"}
                                </h6>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </div>
                  ) : flightData?.isTicketed === false ? (
                    <div>
                      {flightData?.travelers.map((flightData) => (
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                          style={{
                            border: "1px solid #C4C4C4",
                            boxShadow: "none",
                            overflow: "hidden",
                          }}
                        >
                          <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                            sx={{
                              borderBottom: "1px solid #DEDEDE",
                              height: "0px !important",
                            }}
                          >
                            <Box
                              display={"flex"}
                              justifyContent={"space-between"}
                              width={"100%"}
                            >
                              <h5
                                style={{
                                  color: "#003566",
                                  fontWeight: "500",
                                  fontSize: "13px",
                                }}
                              >
                                {flightData?.givenName} {flightData?.surname}
                              </h5>
                            </Box>
                          </AccordionSummary>

                          <AccordionDetails>
                            <Grid container spacing={2}>
                              <Grid item xs={4} md={2}>
                                <h5>Nationality</h5>
                                <h6>
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]
                                        ?.issuingCountryCode
                                    : "Domestic"}
                                </h6>
                              </Grid>

                              <Grid item xs={4} md={2.5}>
                                <h5>Date of Birth</h5>
                                <h6>
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]
                                        ?.birthDate
                                    : "Domestic"}
                                </h6>
                              </Grid>

                              <Grid item xs={4} md={2.5}>
                                <h5>Gender</h5>
                                <h6>
                                  {" "}
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]?.gender
                                    : "Domestic"}
                                </h6>
                              </Grid>

                              <Grid item xs={6} md={2.5}>
                                <h5>Passport Number</h5>
                                <h6>
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]
                                        ?.documentNumber
                                    : "Domestic"}
                                </h6>
                              </Grid>
                              <Grid item xs={6} md={2.5}>
                                <h5>Passport Expire Date</h5>
                                <h6>
                                  {flightData?.identityDocuments
                                    ? flightData?.identityDocuments[0]
                                        ?.expiryDate
                                    : "Domestic"}
                                </h6>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </div>
                  ) : (
                    "wait please ...................."
                  )}
                </Box>
              )}

              {/* For Flyhub */}
              {gds === "FlyHub" && (
                <Box mt={5} className="queue-detail-passenger-detail">
                  <Box my={2}>
                    <span>Passenger Details</span>
                  </Box>
                  {flightData?.Passengers ? (
                    <div>
                      {flightData?.Passengers?.map((flightData) => (
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange("panel1")}
                          style={{
                            border: "1px solid #C4C4C4",
                            boxShadow: "none",
                            overflow: "hidden",
                          }}
                        >
                          <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                            sx={{
                              borderBottom: "1px solid #DEDEDE",
                              height: "0px !important",
                            }}
                          >
                            <Box
                              display={"flex"}
                              justifyContent={"space-between"}
                              width={"100%"}
                            >
                              <h5
                                style={{
                                  color: "#003566",
                                  fontWeight: "500",
                                  fontSize: "13px",
                                }}
                              >
                                {flightData?.FirstName} {flightData?.LastName}
                              </h5>
                            </Box>
                          </AccordionSummary>

                          <AccordionDetails>
                            <Grid container spacing={2}>
                              <Grid item xs={4} md={2}>
                                <h5>Nationality</h5>
                                <h6>
                                  {flightData
                                    ? flightData?.PassportNationality
                                    : "Domestic"}
                                </h6>
                              </Grid>

                              <Grid item xs={4} md={2.5}>
                                <h5>Date of Birth</h5>
                                <h6>
                                  {flightData
                                    ? flightData?.DateOfBirth
                                    : "Domestic"}
                                </h6>
                              </Grid>

                              <Grid item xs={4} md={2.5}>
                                <h5>Gender</h5>
                                <h6>
                                  {" "}
                                  {flightData ? flightData?.Gender : "Domestic"}
                                </h6>
                              </Grid>

                              <Grid item xs={6} md={2.5}>
                                <h5>Passport Number</h5>
                                <h6>
                                  {flightData
                                    ? flightData?.PassportNumber
                                    : "Domestic"}
                                </h6>
                              </Grid>
                              <Grid item xs={6} md={2.5}>
                                <h5>Passport Expire Date</h5>
                                <h6>
                                  {flightData
                                    ? flightData?.PassportExpiryDate
                                    : "Domestic"}
                                </h6>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </div>
                  ) : (
                    "please wait ...................."
                  )}
                </Box>
              )}

              {/* --------------------- passenger details accordion end ------------------- */}

              {/* Booking Status start here */}
              {/* <Box mt={5}>
                <Box my={2}>
                  <span>Booking Status</span>
                </Box>
                <Box
                  style={{ display: "flex", gap: "15px", alignItems: "center" }}
                  className="radioLabel"
                >
                  <label className="customRadio">
                    Cancelled
                    <input type="radio" checked="checked" name="radio" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="customRadio">
                    Expired
                    <input type="radio" name="radio" />
                    <span className="checkmark"></span>
                  </label>
                </Box>
              </Box> */}
              {/* Booking Status end here */}
            </Grid>
            <Grid item md={2.5}>
              <Box mt={5}>
                <div>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    style={{
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px ",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        style={{
                          color: "#dc143c",
                          fontFamily: "poppies",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Download / PDF
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* <ClientInvoice allData={allData} />
                        <AgentInvoice allData={allData} />
                        <ClientTicketWithPrice allData={allData} />
                        <EticketWithoutPrice allData={allData} />
                        <BookingConfirWithPrice allData={allData} />
                        <BookingConfirWithoutPrice allData={allData}  /> */}

                      {/* <Typography
                  style={{
                    color: "#003566",
                    fontFamily: "poppies",
                    fontWeight: "500",
                    fontSize: "14px",
                    height: "45px",
                  }}
                >
                  Booking Confirmation with price
                </Typography> */}

                      {/* <Typography
                  style={{
                    color: "#003566",
                    fontFamily: "poppies",
                    fontWeight: "500",
                    fontSize: "14px",
                    height: "40px",
                  }}
                >
                  Booking Confirmation without price
                </Typography> */}
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    style={{
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px ",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography
                        style={{
                          color: "#dc143c",
                          fontFamily: "poppies",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Fare Rules
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{
                          color: "#003566",
                          fontFamily: "poppies",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Refund Penalties
                      </Typography>

                      <Box>
                        <Typography
                          style={{
                            color: "#dc143c",
                            fontFamily: "poppies",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "30px",
                          }}
                        >
                          Adult
                        </Typography>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          lineHeight="35px"
                        >
                          <span
                            style={{
                              color: "#272323",
                              fontSize: "13px",
                              fontFamily: "poppins",
                              fontWeight: "500",
                              lineHeight: "15px",
                            }}
                          >
                            Before Departure
                          </span>
                          <span
                            style={{
                              color: "#272323",
                              fontSize: "13px",
                              fontFamily: "poppins",
                              fontWeight: "500",
                              lineHeight: "15px",
                            }}
                          >
                            BDT
                          </span>
                        </Box>
                      </Box>

                      <Box>
                        <Typography
                          style={{
                            color: "#dc143c",
                            fontFamily: "poppies",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "30px",
                          }}
                        >
                          Child
                        </Typography>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          lineHeight="35px"
                        >
                          <span
                            style={{
                              color: "#272323",
                              fontSize: "13px",
                              fontFamily: "poppins",
                              fontWeight: "500",
                              lineHeight: "15px",
                            }}
                          >
                            Before Departure
                          </span>
                          <span
                            style={{
                              color: "#272323",
                              fontSize: "13px",
                              fontFamily: "poppins",
                              fontWeight: "500",
                              lineHeight: "15px",
                            }}
                          >
                            BDT
                          </span>
                        </Box>
                      </Box>

                      <Box my={2}>
                        <hr></hr>
                      </Box>
                      <Typography
                        style={{
                          color: "#003566",
                          fontFamily: "poppies",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Reissue Penalties
                      </Typography>

                      <Box>
                        <Typography
                          style={{
                            color: "#dc143c",
                            fontFamily: "poppies",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "30px",
                          }}
                        >
                          Adult
                        </Typography>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          lineHeight="35px"
                        >
                          <span
                            style={{
                              color: "#272323",
                              fontSize: "13px",
                              fontFamily: "poppins",
                              fontWeight: "500",
                              lineHeight: "15px",
                            }}
                          >
                            Before Departure
                          </span>
                          <span
                            style={{
                              color: "#272323",
                              fontSize: "13px",
                              fontFamily: "poppins",
                              fontWeight: "500",
                              lineHeight: "15px",
                            }}
                          >
                            BDT
                          </span>
                        </Box>
                      </Box>

                      <Box>
                        <Typography
                          style={{
                            color: "#dc143c",
                            fontFamily: "poppies",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "30px",
                          }}
                        >
                          Child
                        </Typography>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          lineHeight="35px"
                        >
                          <span
                            style={{
                              color: "#272323",
                              fontSize: "13px",
                              fontFamily: "poppins",
                              fontWeight: "500",
                              lineHeight: "15px",
                            }}
                          >
                            Before Departure
                          </span>
                          <span
                            style={{
                              color: "#272323",
                              fontSize: "13px",
                              fontFamily: "poppins",
                              fontWeight: "500",
                              lineHeight: "15px",
                            }}
                          >
                            BDT
                          </span>
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    style={{
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px ",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        style={{
                          color: "#dc143c",
                          fontFamily: "poppies",
                          fontWeight: "500",
                          fontSize: "15px",
                        }}
                      >
                        Baggage
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        lineHeight="35px"
                      >
                        <span
                          style={{
                            color: "#272323",
                            fontSize: "13px",
                            fontFamily: "poppins",
                            fontWeight: "500",
                          }}
                        >
                          Cabin Baggage
                        </span>
                        <span
                          style={{
                            color: "#272323",
                            fontSize: "13px",
                            fontFamily: "poppins",
                            fontWeight: "500",
                          }}
                        >
                          6 KG
                        </span>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        lineHeight="20px"
                      >
                        <span
                          style={{
                            color: "#272323",
                            fontSize: "13px",
                            fontFamily: "poppins",
                            fontWeight: "500",
                          }}
                        >
                          Baggage
                        </span>
                        <span
                          style={{
                            color: "#272323",
                            fontSize: "13px",
                            fontFamily: "poppins",
                            fontWeight: "500",
                          }}
                        >
                          2 Pieces 30 KG
                        </span>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <>
                  <Box className="queues-detail-calcel-btn">
                    <button
                      style={{
                        backgroundColor: "#003566",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Expired
                    </button>
                  </Box>
                  <Box className="queues-detail-calcel-btn">
                    <button onClick={() => cancelBooking(gds, pnr)}>
                      Cancel Flight
                    </button>
                  </Box>
                </>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "50%",
            marginInline: "auto",
            mb: "10px",
          }}
        >
          {/* <img
            src={Loader}
            alt="loader"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "center",
            }}
          /> */}
        </Box>
      </Container>
    </Box>
  );
};

export default BookHoldData;

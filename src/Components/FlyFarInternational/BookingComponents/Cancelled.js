import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hold.css";

const Cancelled = () => {
  const navigate = useNavigate();
  const [holdData, setHoldData] = useState([]);
  console.log(holdData);

  useEffect(() => {
    const url =
      "https://api.flyfarint.com/v.1.0.0/Admin/Booking/all.php?status=Cancelled";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHoldData(data));
  }, []);

  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
    const url = `https://api.flyfarint.com/v.1.0.0/Admin/Agent/allAgent.php?agentId=${holdData[0]?.agentId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAgentData(data[0]));
  }, [holdData[0]?.agentId]);

  //  send to booking hold page
  const sendToQueuesDetails = (
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
    timeLimit
  ) => {
    navigate("/bookholddata", {
      state: {
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
      },
    });
  };
  return (
    <Box style={{ width: "97% " }}>
      <Box className="balance-transaction" marginTop={"20px"}>
        <table>
          <tr>
            <th>Reference</th>
            <th>Status</th>
            <th>System </th>
            <th>Type</th>
            <th>Departure & Arrival </th>
            <th>Date </th>
            <th>Airlines</th>
            <th>PNR</th>
            <th>PAX</th>
            <th>Company Name</th>
            <th>View Details</th>
            <th>Call</th>
          </tr>

          {holdData.map(
            (data) =>
              data.status === "Cancelled" && (
                <tr>
                  <td>{data?.bookingId}</td>
                  <td>{data?.status}</td>
                  <td>{data?.gds}</td>
                  <td>{data?.tripType}</td>
                  <td>
                    {data?.deptFrom}-{data?.arriveTo}
                  </td>
                  <td>{data?.dateTime.slice(0, 10)}</td>
                  <td>{data?.airlines}</td>
                  <td>{data?.pnr}</td>
                  <td>{data?.pax}</td>
                  <td>{agentData?.company}</td>
                  <td>
                    <button
                      disabled
                      onClick={() =>
                        sendToQueuesDetails(
                          data?.BookingId,
                          data?.invoiceId,
                          data?.agentId,
                          data?.staffId,
                          data?.email,
                          data?.phone,
                          data?.name,
                          data?.pnr,
                          data?.tripType,
                          data?.pax,
                          data?.adultCount,
                          data?.childCount,
                          data?.infantCount,
                          data?.netCost,
                          data?.adultCostBase,
                          data?.childCostBase,
                          data?.infantCostBase,
                          data?.adultCostTax,
                          data?.childCostTax,
                          data?.infantCostTax,
                          data?.grossCost,
                          data?.baseFare,
                          data?.Tax,
                          data?.deptFrom,
                          data?.airlines,
                          data?.arriveTo,
                          data?.gds,
                          data?.status,
                          data?.dateTime,
                          data?.issueTime,
                          data?.timeLimit
                        )
                      }
                    >
                      View Details
                    </button>
                  </td>
                  <td>Call</td>
                </tr>
              )
          )}
        </table>
      </Box>
    </Box>
  );
};

export default Cancelled;

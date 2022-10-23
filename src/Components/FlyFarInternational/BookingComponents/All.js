import {
  Box,
  Grid,
  Typography,
  Button,
  Pagination,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hold.css";

const All = () => {
  const navigate = useNavigate();
  const [holdData, setHoldData] = useState([]);
  const [mainAgentData, setMainAgentData] = useState([]);
  //  pagination handle
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  let size = 15;
  // Handle a page change.
  const handlePageChange = (event, value) => {
    setPage(value);
    setMainAgentData(holdData.slice((value - 1) * size, value * size));
  };

  useEffect(() => {
    const url = "https://api.flyfarint.com/v.1.0.0/Admin/Booking/all.php?all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const count = data.length;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        setHoldData(data);
        setMainAgentData(data);
      });
  }, []);

  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
    const url = `https://api.flyfarint.com/v.1.0.0/Admin/Agent/allAgent.php?agentId=${holdData[0]?.agentId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAgentData(data[0]));
  }, [holdData[0]?.agentId]);

  // pagination

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

          {mainAgentData?.slice(0, size).map((data) => (
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
          ))}
        </table>
      </Box>

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
  );
};

export default All;

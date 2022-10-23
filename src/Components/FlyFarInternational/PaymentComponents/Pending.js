import { Box, Modal, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { DarkmodeEnable } from "../../../App";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  border: "2px solid #fff",
};

const Pending = () => {
  const navigate = useNavigate();
  const { isDark } = React.useContext(DarkmodeEnable);
  const [paymentData, setPaymentData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.flyfarint.com/v.1.0.0/Admin/DepositRequest/allRequest.php?status=Pending`
    )
      .then((res) => res.json())
      .then((data) => setPaymentData(data));
  }, []);

  //  padding handle

  const approvePayment = async (id, agentId, actionBy, staffId) => {
    let url = `https://api.flyfarint.com/v.1.0.0/Admin/DepositRequest/approved.php`;

    let body = JSON.stringify({
      id: id,
      agentId: agentId,
      actionBy: "actionByRifat",
      staffId: staffId,
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
        if (data.status === "success") {
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
  };

  //  reject handle
  const [open, setOpen] = React.useState(false);

  const [reason, setReason] = useState("");
  const [id, setId] = useState("");
  const [agentId, setAgentId] = useState("");
  const [action, setAction1] = useState("");
  const [staffId, setStaffID] = useState("");

  const handleOpen = (id, agentId, actionBy, staffId) => {
    setId(id);
    setAgentId(agentId);
    setAction1(actionBy);
    setStaffID(staffId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rejectHandle = async () => {
    let url = `https://api.flyfarint.com/v.1.0.0/Admin/DepositRequest/rejected.php`;

    let body = JSON.stringify({
      id: id,
      agentId: agentId,
      actionBy: action,
      reason: reason,
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
        if (data.status === "success") {
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
    handleClose();
  };

  return (
    <Box
      style={{ width: "98% " }}
      className="searchHistoryTable"
      marginTop={"20px"}
    >
      {/* <Box className="searchList1" mb={2}>
      <input type="text" placeholder="search" />
    </Box> */}

      <table>
        <tr>
          <th>Reference</th>
          <th>Agent Id</th>
          <th>Sender acc </th>
          <th>Receiver Acc</th>
          <th colSpan={3}>Transaction</th>
          <th>Status </th>
          <th>Payment Method </th>
          <th>Attachment </th>
          <th>Action</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th style={{ backgroundColor: "#003566", width: "100px" }}>Id </th>
          <th style={{ backgroundColor: "#003566", width: "100px" }}>
            Amount{" "}
          </th>
          <th style={{ backgroundColor: "#003566", width: "100px" }}>Date</th>
          <th> </th>
          <th></th>
          <th></th>
          <th></th>
        </tr>

        {paymentData.map((data) => (
          <tr>
            <td>{data?.id}</td>
            <td>{data?.agentId}</td>
            <td>{data?.sender}</td>
            <td>{data?.reciever}</td>
            <td>{data?.transactionId}</td>
            <td>{data?.amount}</td>
            <td>{data?.createdAt}</td>
            <td>{data?.status}</td>
            <td>{data?.paymentmethod}</td>
            <td>
              <a href={data?.attachment} target="_blank">
                View
              </a>
            </td>
            <td>
              <CheckCircleOutlineIcon
                onClick={() =>
                  approvePayment(
                    data?.id,
                    data?.agentId,
                    data?.actionBy,
                    data?.staffId
                  )
                }
                style={{ color: "green", cursor: "pointer" }}
              />
              <DangerousIcon
                onClick={() =>
                  handleOpen(
                    data?.id,
                    data?.agentId,
                    data?.actionBy,
                    data?.staffId
                  )
                }
                style={{ color: "red", cursor: "pointer" }}
              />
            </td>
          </tr>
        ))}
      </table>
      <Box className="agentModal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{ ...style, width: 600 }}
            style={{ border: "none", borderRadius: "5px" }}
          >
            <Box className="airlinePnr1" mb={2}>
              <label>Reason:</label>
              <input
                required
                type="text"
                placeholder="Enter"
                name="airlinePnr"
                onChange={(e) => setReason(e.target.value)}
              />
              <Box className="saveBtn1" mt={2}>
                <button onClick={rejectHandle}>Save</button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Pending;

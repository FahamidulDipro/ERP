import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaPlane, FaCircle } from "react-icons/fa";
import { MdLuggage, MdEventSeat } from "react-icons/md";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import { DarkmodeEnable } from "../../../App";
import AddGroupFare from "./AddGroupFare";
import "./GroupFare.css"
import Flags from "./Flags";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const GroupFare = ({ isLoading, data, refetch }) => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const handleDelete = (id) => {
    fetch(`https://api.flyfarint.com/v.1.0.0/Admin/GroupFare/deleteFare.php?groupId=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },

    }).then(res => res.json()).then(data => {

      console.log(data)
      refetch()
    })

  }

  return <Box sx={{ width: "95%", my: "70px" }}>
    <Box sx={{ display: "flex", justifyContent: "right" }}>
      {/* <Link to="/manageWebsite/www.flyfarint.com/groupFare/addGroupFare/nonStop"> <Button sx={{
        background: "#70A5D8", marginBottom: "20px", color: "white", borderRadius: "0", "&:hover": {
          background: "#70A5D8"
        }
      }}>Add Group Fare</Button></Link> */}

      {/* <Button sx={{
        background: "#70A5D8", marginBottom: "20px", color: "white", borderRadius: "0", "&:hover": {
          background: "#70A5D8"
        }
      }} onClick={handleOpen}>Add Group Fare</Button> */}
      <Box> <Link to="/manageWebsite/www.flyfarint.com/addGroupFareRoute/nonStop" >

        <Button sx={{
          background: "#70A5D8", marginBottom: "20px", color: "white", borderRadius: "0", "&:hover": {
            background: "#70A5D8"
          }
        }}> Add Group Fare</Button>
      </Link></Box>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ width: "100%" }}>
              <AddGroupFare />
            </Box>

          </Box>

 



        </Box>
      </Modal> */}


    </Box>

    {
      isLoading && <Loader></Loader>
    }

    {
      data?.map(groupFare => <Box container sx={{ background: "white", boxShadow: 3, borderRadius: "12px", display: "flex", justifyContent: "space-between" }} mt={5} >
        <Box sx={{ display: "flex", width: "25%" }} p={3} >

          <Box sx={{ ml: "10px" }}>

            <Typography sx={{ fontSize: "17px", color: "#FF0000", fontWeight: "600", }}> <Flags code={groupFare.career} /></Typography>


          </Box>
        </Box>



        <Box p={3} sx={{ width: "20%" }}>
          <Typography sx={{ fontWeight: "550" }}>{groupFare?.departure1} - 19:30</Typography>

          <Typography sx={{ fontSize: "12px", color: "#003566", fontWeight: "600" }}>{groupFare?.segments?.address}</Typography>
          <Typography sx={{ fontSize: "14px", color: "#C7C7C7" }}>{groupFare.depTime1}</Typography>
          <Typography sx={{ mt: "30px", fontSize: "12px", fontWeight: "600" }}>Economy</Typography>


        </Box>
        <Box sx={{ width: "30%" }} p={3}>
          <Typography sx={{ fontSize: "10px", display: "flex", justifyContent: "center" }}> <span style={{ color: "#003566", fontWeight: "600" }}>31:25 Hrs |</span>  <span style={{ color: "#DC143C", fontWeight: "600" }}>&nbsp; 2 Stops</span></Typography>
          <Box >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "20px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaCircle style={{ color: "#C7C7C7" }} />
                <FaPlane style={{ color: "#003566", fontSize: "25px" }} className={`${groupFare.segment === "3" ? "plane" : groupFare.segment === "2" ? "oneStopPlane" : "noStopPlane"}`}></FaPlane>
              </div>
              {
                groupFare.segment === "3" ? <>     <Box sx={{ background: "#DC143C", height: "10px", width: "35px", borderRadius: "5px", }}></Box>
                  <Box sx={{ background: "#DC143C", height: "10px", width: "35px", borderRadius: "5px", }}></Box></> : groupFare.segment === "2" ? <><Box sx={{ background: "#DC143C", height: "10px", width: "35px", borderRadius: "5px", }}></Box></> : null
              }

              <FaCircle style={{ color: "#C7C7C7" }} />

            </Box>
            <Box sx={{ borderBottom: "1px solid #C7C7C7", marginTop: "-13px" }}></Box>

          </Box>

          <Box sx={{ mt: "30%", display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ color: "#DC143C", fontWeight: "600" }}>Non Refundable</span> <span style={{ fontWeight: "600", display: "flex" }}><MdLuggage style={{ fontSize: "25px", color: "#DC143C", marginRight: "10px" }} /> 20kg</span></Box>
        </Box>
        <Box p={3} sx={{ width: "20%" }}>
          <Typography sx={{ fontWeight: "600", textAlign: "right" }}>{groupFare.arrival3 ? groupFare.arrival3 : groupFare.arrival2 ? groupFare.arrival2 : groupFare.arrival1} - 19:30</Typography>
          {/* <Typography sx={{ fontSize: "12px", color: "#003566", fontWeight: "600", textAlign: "right" }}>Dubai</Typography> */}
          <Typography sx={{ fontSize: "14px", color: "#C7C7C7", textAlign: "right" }}>{groupFare.arrTime1}</Typography>
          <Box sx={{ mt: "40%", display: "flex", justifyContent: "right" }}>
            <span style={{ fontWeight: "600", display: "flex" }}><MdEventSeat style={{ fontSize: "25px", color: "#DC143C", marginRight: "10px" }} /> {groupFare.seat} seats</span>
          </Box>
        </Box>
        <Box sx={{ background: "linear-gradient(121.52deg, #5D7F9E 0%, #003566 77.49%)", color: "white", borderRadius: "0px 12px 12px 0px", width: "25%" }} p={3}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "15px" }}>Total Price</Typography>
            <Typography sx={{ fontSize: "15px" }}>{parseFloat(groupFare?.BasePrice) + parseFloat(groupFare?.Taxes)}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "13px" }}>Base Price</Typography>
            <Typography sx={{ fontSize: "13px" }}>{groupFare?.BasePrice}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "13px" }}>Tax</Typography>
            <Typography sx={{ fontSize: "13px" }}>{groupFare?.Taxes}</Typography>
          </Box>
          <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
            <div>

              <Button sx={{
                marginTop: "70%", fontSize: "11px", marginLeft: "30px", color: "white", background: "#70A5D8", borderRadius: "12px 0px", "&:hover": {
                  background: "#70A5D8"
                }
              }}>Modify</Button>
            </div>

            <Button sx={{
              marginTop: "30%", fontSize: "11px", marginLeft: "30px", color: "white", background: "#DC143C", borderRadius: "12px 0px", "&:hover": {
                background: "#DC143C"
              }
            }} onClick={() => handleDelete(groupFare?.groupId)}>Delete</Button>
          </Box>

        </Box>
      </Box>)
    }


  </Box >;
};

export default GroupFare;

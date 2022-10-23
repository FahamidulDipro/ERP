import { Box } from "@mui/material";
import React from "react";
import TableNotification from "../TableCompo/TableNotification";

const Notification = () => {
  const notificationHeadings = ["Notification ID", "Post Date", " Title", "Post By", "view", "Action"]

  function createNotifications(
    id,
    postDate,
    title,
    postBy,
    view,

  ) {
    return {
      id,
      postDate,
      title,
      postBy,
      view,


    };
  }
  const rowsAgents = [
    createNotifications(
      "0055",
      "12/10/22",
      "Dubai Visa is now Open",
      "Syed Afridi",
      "view details",
    ),

  ];
  return <Box>
    <TableNotification rows={rowsAgents} arr={notificationHeadings}/>
  </Box>;
};

export default Notification;

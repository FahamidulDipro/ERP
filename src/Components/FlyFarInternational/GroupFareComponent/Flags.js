import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Flags = ({ code }) => {
    const [flag, setFlag] = useState({});
    useEffect(() => {
        fetch(`https://api.flyfarint.com/v.1.0.0/AirMaterials/Airlines.php?search=${code}`).then(res => res.json()).then(data => setFlag(data))
    }, {})

  
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between",width:"120%" }}>

                <Box p={2} sx={{ border: "1px solid green" ,borderRadius:"50%" }}>    <img src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${code}.png`} style={{ height:"30px",width: "30px",}} /></Box>


                <Box sx={{marginRight:"10px",textAlign:"left"}}>
                    <Typography sx={{ width: "120%",fontWeight:"bold" }}>  {flag[0]?.name}</Typography>
                    <Typography color="#003566" sx={{ fontSize: "12px", fontWeight: "550" }}>EMA380</Typography>
                </Box>

            </Box>
        </Box>
    );
};

export default Flags;
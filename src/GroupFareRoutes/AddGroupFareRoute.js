import { Box } from '@mui/material';
import React from 'react';
import AddGroupFare from '../Components/FlyFarInternational/GroupFareComponent/AddGroupFare';

const AddGroupFareRoute = () => {
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ width: "100%" }}>
                    <AddGroupFare />
                </Box>

            </Box>
        </Box>
    );
};

export default AddGroupFareRoute;
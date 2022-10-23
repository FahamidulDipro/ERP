import { Box } from '@mui/system';
import React from 'react';
import "./Loader.css"
const Loader = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>
        </Box>



    );
};

export default Loader;
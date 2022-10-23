import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import flightData from '../../../flightData';
import "./NonStop.css"

import { DarkmodeEnable } from '../../../App';
import Select from 'react-select';


const styles = {
    menuList: (base) => ({
        ...base,

        "::-webkit-scrollbar": {
            width: "5px",

        },
        "::-webkit-scrollbar-track": {
            background: "red",

        },
        "::-webkit-scrollbar-thumb": {
            background: "#888"
        },

    })
}

const NonStop = () => {
    const { isDark } = React.useContext(DarkmodeEnable);
    const [isLoading, setIsLoading] = useState(false);

    const [nonStopData, setNonStopData] = useState([])
    const { control, register, handleSubmit, setValue } = useForm();
    const onSubmit = data => setNonStopData(data);
    // const onSubmit = data=>console.log(data)


    // Career Name Fetching
    const [career, setCareer] = useState([]);
    useEffect(() => {
        fetch("https://api.flyfarint.com/v.1.0.0/AirMaterials/Airlines.php?all").then(res => res.json()).then(data => setCareer(data))
    }, [])


    const nestedData = {
        segment: 1,
        career: nonStopData?.careerName?.code,
        basePrice: nonStopData.basePrice,
        taxes: nonStopData.taxes,
        bags: nonStopData.bags,
        seat: nonStopData.seat,
        segments: [
            {
                depFrom: nonStopData?.departureFrom?.name,
                arrTo: nonStopData?.arrivalTo?.name,
                depTime: nonStopData.depTime,
                arrTime: nonStopData.arrTime,
                flightNumber: nonStopData.flightNumber,
                address: nonStopData?.departureFrom?.Address

            }
        ]
    }



    useEffect(() => {
        // setIsLoading(true)
        fetch(
            "https://api.flyfarint.com/v.1.0.0/Admin/GroupFare/addFare.php", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nestedData)
        }
        ).then((res) => res.json()).then(d => {
            setIsLoading(false)
            console.log(d)
        })
    }, [nonStopData])


    return (


        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Grid container spacing={2} mt={3}>
                    {console.log(nestedData)}

                    <Grid item xs={4}>

                        <Controller
                            name="departureFrom"
                            placeholder="Departure From"

                            control={control}

                            render={({ field }) => <Select
                                styles={styles}
                                className="departureSelect"
                                {...field}
                                options={flightData}
                                placeholder="Departure From"
                                getOptionLabel={(option) => {
                                    return <Box sx={{ display: "flex", justifyContent: "space-between" }} key={option.name}>
                                        <Box>
                                            <Typography sx={{ fontSize: "13px", color: "#003566", fontWeight: "600" }}> {option.Address}</Typography>
                                            <Typography sx={{ fontSize: "11px", color: "gray" }}> {option.name}</Typography>
                                        </Box>

                                        <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "12px" }}>{option.code}</Typography>
                                    </Box>
                                }}
                                // getOptionLabel={option=>option.name}
                                getOptionValue={option => option.Address}
                            />}
                        />

                    </Grid>

                    <Grid item xs={4}>
                        <Controller
                            name="arrivalTo"
                            control={control}

                            placeholder="Arrival To"
                            render={({ field }) => <Select
                                styles={styles}
                                className="departureSelect"
                                {...field}
                                options={flightData}
                                placeholder="Arrival To"
                                getOptionLabel={(option) => {
                                    return <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "13px", color: "#003566", fontWeight: "600" }}> {option.Address}</Typography>
                                            <Typography sx={{ fontSize: "11px", color: "gray" }}> {option.name}</Typography>
                                        </Box>

                                        <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "12px" }}>{option.code}</Typography>
                                    </Box>
                                }}
                                getOptionValue={option => option?.Address}
                            />}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("depTime")}
                            placeholder="Departure Time"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("arrTime")}
                            placeholder="Arival Time"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>

                    <Grid item xs={3}>
                        <Controller
                            name="careerName"
                            placeholder="Departure From"

                            control={control}

                            render={({ field }) => <Select
                                styles={styles}
                                className="departureSelect"
                                {...field}
                                options={career}
                                placeholder="Career Name"
                                getOptionLabel={(option) => {
                                    return <Box sx={{ display: "flex", justifyContent: "space-between" }} key={option?.code}>
                                        <Box>
                                            <Typography sx={{ fontSize: "13px", color: "#003566", fontWeight: "600" }}> {option?.name}</Typography>

                                        </Box>

                                        <Typography sx={{ fontWeight: "bold", color: "gray", fontSize: "12px" }}>{option?.code}</Typography>
                                    </Box>
                                }}

                                getOptionValue={option => option.name}
                            />}
                        />

                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("flightNumber")}
                            placeholder="Flight Number"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("seat")}
                            placeholder="Seat"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("bags")}
                            placeholder="Bag"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("basePrice")}
                            placeholder="Base Price"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField {...register("taxes")}
                            placeholder="Tax"
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={`${isDark ? "input_dark" : "input_light"}`}
                            sx={{
                                "& fieldset": { border: "none" },
                            }} />
                    </Grid>



                </Grid>
                <Button type="submit" style={{
                    padding: "5px",
                    background: "#70A5D8", width: "20%", color: "white", marginTop: "20px", borderRadius: "0", "&:hover": {
                        background: "#70A5D8"
                    }, border: "0", cursor: "pointer"
                }} >Submit</Button>
            </form>

        </Box>

    );
};

export default NonStop;
// import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

import React, { useContext} from 'react';
import { multiStepContext } from '../FormContext'


const AddCarForm = () => {
    const { userData, setUserData } = useContext(multiStepContext)


    return (
            <Paper elevation={5} style={{ padding: 15, backgroundColor: "rgb(247 247 247 / 87%)" }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Vehicle Details
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="make"
                                    label="Make"
                                    value={userData["make"]}
                                    onChange={(event) => setUserData({...userData, "make" : event.target.value})}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="model"
                                    label="Model"
                                    value={userData["model"]}
                                    onChange={(event) => setUserData({...userData, "model" : event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="year"
                                    label="Year"
                                    type="number"
                                    value={userData["year"]}
                                    onChange={(event) => setUserData({...userData, "year" : event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="exteriorColor"
                                    label="Exterior Color"
                                    value={userData["exteriorColor"]}
                                    onChange={(event) => setUserData({...userData, "exteriorColor" : event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="interiorColor"
                                    label="Interior Color"
                                    value={userData["interiorColor"]}
                                    onChange={(event) => setUserData({...userData, "interiorColor" : event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="vinNumber"
                                    label="VIN Number"
                                    value={userData["vinNumber"]}
                                    onChange={(event) => setUserData({...userData, "vinNumber" : event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="ezPassNumber"
                                    label="EZ Pass Number"
                                    value={userData["ezPassNumber"]}
                                    onChange={(event) => setUserData({...userData, "ezPassNumber" : event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="transmissionType"
                                    label="Transmission Type"
                                    value={userData["transmissionType"]}
                                    onChange={(event) => setUserData({...userData, "transmissionType" : event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="finalCost"
                                    label="Final Cost"
                                    value={userData["finalCost"]}
                                    onChange={(event) => setUserData({...userData, "finalCost" : event.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    multiline
                                    rows={6}
                                    required
                                    fullWidth
                                    name="additionalNotesAddCar"
                                    label="Detail Notes"
                                    value={userData["additionalNotesAddCar"]}
                                    onChange={(event) => setUserData({...userData, "additionalNotesAddCar" : event.target.value})}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>


    );
};


export default AddCarForm;
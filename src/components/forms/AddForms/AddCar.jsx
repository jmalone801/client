import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

const AddCarForm = ({ formData, setForm }) => {
    const { make,
            model,
            year,
            exteriorColor,
            interiorColor,
            vinNumber,
            ezPassNumber,
            transmissionType,
            finalCost,
            additionalNotesAddCar } = formData;


    return (
        <React.Fragment>
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
                                    value={make}
                                    onChange={setForm}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="model"
                                    label="Model"
                                    value={model}
                                    onChange={setForm}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="year"
                                    label="Year"
                                    value={year}
                                    onChange={setForm}
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="exteriorColor"
                                    label="Exterior Color"
                                    value={exteriorColor}
                                    onChange={setForm}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="interiorColor"
                                    label="Interior Color"
                                    value={interiorColor}
                                    onChange={setForm}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="vinNumber"
                                    label="VIN Number"
                                    value={vinNumber}
                                    onChange={setForm}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="ezPassNumber"
                                    label="EZ Pass Number"
                                    value={ezPassNumber}
                                    onChange={setForm}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="transmissionType"
                                    label="Transmission Type"
                                    value={transmissionType}
                                    onChange={setForm}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="finalCost"
                                    label="Final Cost"
                                    value={finalCost}
                                    onChange={setForm}
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
                                    value={additionalNotesAddCar}
                                    onChange={setForm}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>

        </React.Fragment>
    );
};


export default AddCarForm;
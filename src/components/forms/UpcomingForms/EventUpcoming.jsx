import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { v4 as uuidv4 } from 'uuid';


const EventUpcoming = () => {
    const [inputFields, setInputFields] = useState([{
        id: uuidv4(),
        nameOfEventUpcoming: '',
        carBeingShownEventUpcoming: '',
        locationOfEventUpcoming: '',
        dateOfEventUpcoming: '',
        additionalNotesEventUpcoming: ''
    },]);


    // Handles form submit **Needs to be changed later on**
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("InputFields:", inputFields);
    };


    // Begin Add button
    // Handles indiviual input
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })
        setInputFields(newInputFields);
    }

    // Handles add button
    const handleAddFields = () => {
        setInputFields([...inputFields, { 
            id: uuidv4(), 
            nameOfEventUpcoming: '',
            carBeingShownEventUpcoming: '',
            locationOfEventUpcoming: '',
            dateOfEventUpcoming: '',
            additionalNotesEventUpcoming: ''
        }])
    }

    // Handles remove button
    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    // End Add Button

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {inputFields.map(inputField => (
                    <div key={inputField.id}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Name of Event"
                                    name="nameOfEventUpcoming"
                                    value={inputField.nameOfEventUpcoming}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Car Being Shown"
                                    name="carBeingShownEventUpcoming"
                                    value={inputField.carBeingShownEventUpcoming}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="previousOwnerYears"
                                    label="Location of Event"
                                    name="locationOfEventUpcoming"
                                    value={inputField.locationOfEventUpcoming}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Date of Event"
                                    name="dateOfEventUpcoming"
                                    value={inputField.dateOfEventUpcoming}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Additional Notes"
                                    name="additionalNotesEventUpcoming"
                                    value={inputField.additionalNotesEventUpcoming}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            hidden={inputFields.length === 1}
                            onClick={() => handleRemoveFields(inputField.id)}
                            sx={{ float: 'left' }}
                        >Remove</Button>
                        <Divider
                            hidden={inputFields.length === 1}
                            sx={{ mt: 5, mb: 5, borderBottomWidth: 2 }} />
                    </div>
                ))}
                <Button onClick={handleAddFields}
                    variant="contained"
                    sx={{ mt: 3, mb: 2, float: 'right' }}>
                    Add Showing</Button>
                {/* <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                onClick={handleSubmit}
                >Send</Button> */}
            </form>
        </div >
    );
}
export default EventUpcoming;
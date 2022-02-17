import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { v4 as uuidv4 } from 'uuid';


const RepairHistory = () => {
    const [inputFields, setInputFields] = useState([{
        id: uuidv4(),
        repairDetails: '',
        garageName: '',
        costOfRepair: '',
        mileageRepair: '',
        additionalNotes: ''
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
            repairDetails: '',
            garageName: '',
            costOfRepair: '',
            mileageRepair: '',
            additionalNotes: ''
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
                                    label="What Needed Repair"
                                    name="repairDetails"
                                    value={inputField.repairDetails}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Garage/Shop Name"
                                    name="garageName"
                                    value={inputField.garageName}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Cost of Repair"
                                    name="costOfRepair"
                                    value={inputField.costOfRepair}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mileage"
                                    name="mileageRepair"
                                    value={inputField.mileageRepair}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Additional Notes"
                                    name="additionalNotes"
                                    value={inputField.additionalNotes}
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
                    Add Repair</Button>
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
export default RepairHistory;
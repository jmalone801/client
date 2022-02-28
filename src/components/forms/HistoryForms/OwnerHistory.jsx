import React, { useState, useContext } from 'react';
// import React, { useContext} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { v4 as uuidv4 } from 'uuid';

import FormContext from '../FormContext'



const OwnerHistory = (props) => {

    const {form, setTestForm } = useContext(FormContext)


    const [inputFields, setInputFields] = useState([{
        id: uuidv4(),
        previousOwnerName: '',
        previousOwnerContact: '',
        previousOwnerYears: '',
        mileageOwners: '',
        previousOwnerStory: ''
    },]);


    // Handles form submit **Needs to be changed later on**
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("InputFields:", inputFields);
    };


    // Begin Add button
    // Handles indiviual input
    const handleChangeInput = (id, event) => {
        console.log("call from FIRST function")
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })
        setInputFields(newInputFields);
    }

    // SECOND FUNCTION TEST
    const handleFormInput = () => {
        console.log("call from SECOND function")
        console.log(form)
        setTestForm(form)
    }


    // Handles add button
    const handleAddFields = () => {
        setInputFields([...inputFields, { 
            id: uuidv4(), 
            previousOwnerName: '', 
            previousOwnerContact: '', 
            previousOwnerYears: '', 
            mileageOwners: '', 
            previousOwnerStory: '' }])
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
                                    label="Previous Owner Name"
                                    name="previousOwnerName"
                                    value={inputField.previousOwnerName}
                                    onChange={event => {handleChangeInput(inputField.id, event)
                                                        handleFormInput(event.target.value)}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Contact Infomation"
                                    name="previousOwnerContact"
                                    value={inputField.previousOwnerContact}
                                    onChange={event => {handleChangeInput(inputField.id, event)
                                                        handleFormInput(event.target.value)}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="previousOwnerYears"
                                    label="Years in Possession"
                                    name="previousOwnerYears"
                                    value={inputField.previousOwnerYears}
                                    onChange={event => {handleChangeInput(inputField.id, event)
                                                        handleFormInput(event.target.value)}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mileage When Sold"
                                    name="mileageOwners"
                                    value={inputField.mileageOwners}
                                    onChange={event => {handleChangeInput(inputField.id, event)
                                                        handleFormInput(event.target.value)}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Stories or Notes"
                                    name="previousOwnerStory"
                                    value={inputField.previousOwnerStory}
                                    onChange={event => {handleChangeInput(inputField.id, event)
                                                        handleFormInput(event.target.value)}}
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
                    Add Owner</Button>
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
export default OwnerHistory;
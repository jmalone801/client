// import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { FieldArray, Form, Formik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';

import { multiStepContext } from '../FormContext'
import React, { useContext } from 'react';


const OwnerHistoryCopy = () => {
    const { userData, setUserData } = useContext(multiStepContext)

    const onChangeHandler = (event, index) => {
        const copyData = {...userData};
        copyData.owners[index][event.target.name] = event.target.value;
        setUserData(copyData);
    }


    return (
        <div>
            <Formik initialValues={{
                owners: [{
                    id: uuidv4(),
                    previousOwnerName: '',
                    previousOwnerContact: '',
                    previousOwnerYears: '',
                    mileageOwners: '',
                    previousOwnerStory: ''
                }]
            }}>
                {({ values }) => (
                    <Form>
                        <FieldArray name="owners"
                            render={({ push, remove }) => (
                                <div>
                                    {values.owners.map((o, index) => {
                                        return (
                                            <div key={index}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            fullWidth
                                                            label="Previous Owner Name"
                                                            name={`owners.${index}.previousOwnerName`}
                                                            // name="previousOwnerName"
                                                            value={userData.previousOwnerName}
                                                            // onChange={(event) => setUserData({ ...userData, previousOwnerName: event.target.value })}
                                                            onChange={(event)=>onChangeHandler(event,index)}
                                                            // onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            fullWidth
                                                            label="Contact Infomation"
                                                            name={`owners.${index}.previousOwnerContact`}
                                                            value={userData.previousOwnerContact}
                                                            onChange={(event) => setUserData({ ...userData, previousOwnerContact: event.target.value })}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            fullWidth
                                                            id="previousOwnerYears"
                                                            label="Years in Possession"
                                                            name={`owners[${index}].previousOwnerYears`}
                                                            value={userData.previousOwnerYears}
                                                            onChange={(event) => setUserData({ ...userData, previousOwnerYears: event.target.value })}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            fullWidth
                                                            label="Mileage When Sold"
                                                            name={`owners[${index}].mileageOwners`}
                                                            value={userData.mileageOwners}
                                                            onChange={(event) => setUserData({ ...userData, mileageOwners: event.target.value })}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            fullWidth
                                                            label="Stories or Notes"
                                                            name={`owners[${index}].previousOwnerStory`}
                                                            multiline
                                                            rows={4}
                                                            value={userData.previousOwnerStory}
                                                            onChange={(event) => setUserData({ ...userData, previousOwnerStory: event.target.value })}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Button
                                                    hidden={index === 0}
                                                    onClick={() => remove(index)}
                                                    sx={{ float: 'left' }}
                                                >Remove</Button>
                                                <Divider
                                                    sx={{ mt: 5, mb: 5, borderBottomWidth: 2 }} />
                                            </div>
                                        );
                                    })}
                                    <Button
                                        type="button"
                                        onClick={() =>
                                            push({
                                                id: uuidv4(),
                                                previousOwnerName: '',
                                                previousOwnerContact: '',
                                                previousOwnerYears: '',
                                                mileageOwners: '',
                                                previousOwnerStory: ''
                                            })
                                        }
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, float: 'right' }}>
                                        add to list
                                    </Button>
                                </div>
                            )}
                        />

                        <pre style={{ textAlign: "left" }}>
                            <strong>Values</strong>
                            <br />
                            {JSON.stringify(values, null, 2)}
                        </pre>

                    </Form>
                )}
            </Formik>
        </div>


    );
}
export default OwnerHistoryCopy;
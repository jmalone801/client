import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import ColorTheme from '../navs/ColorTheme';
import NavContainer from '../navs/SecondaryNav';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import AddCar from './AddForms/AddCar'
import MainHistory from './HistoryForms/MainHistory'
import MainUpcoming from './UpcomingForms/MainUpcoming'
import { multiStepContext } from './FormContext'




const MainStepper = () => {
    const { submitData } = useContext(multiStepContext)

    const [activeStep, setActiveStep] = useState(0);
    const history = useHistory();




    // Verifys if user is logged in
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/loggedInUser', { withCredentials: true }) // withCreditials is needed for JWT/Cookies
            .then(res => {
                console.log("Results for logged in user", res)
            })
            .catch(err => {
                console.log("Error for logged in user", err)
                history.push("/")
            })
    }, [history])


    // Begin stepper functions ===========================================================================
    // Handles next button
    const handleNext = () => {
        if(activeStep === stepsLabel.length - 1){
            console.log("Form Successfully Submitted")
            submitData()
            // Run submit function here
        }
        else {
            console.log("NEXT")
            setActiveStep(activeStep + 1);
        }
    };

    // Handles back button
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // Stepper labels
    const stepsLabel = ['Add Vehicle', 'Vehicle History', 'Upcoming'];

    // Stepper context
    function getStepContent(step) {
        console.log(step)
        switch (step) {
            case 0:
                return <AddCar />; 
            case 1:
                return <MainHistory />;
            case 2:
                return <MainUpcoming />;
            default:
                throw new Error('Unknown step');
        }
    }
    // End stepper functions ===========================================================================




    return (
        <ThemeProvider theme={ColorTheme}>
            <NavContainer />

                <Container maxWidth="sm" sx={{ mb: 5 }} style={{ marginTop: 100 }}>
                    {/* Begin Stepper Label ONLY */}
                    <Stepper activeStep={activeStep} sx={{ width: "100%", mb: 4 }}>
                        {stepsLabel.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {/* End Stepper Label ONLY */}
                    {/* Begin Stepper Content */}
                    <React.Fragment>
                            {activeStep === stepsLabel.length ? (
                                <React.Fragment>
                                    <Typography variant="h5">
                                        Success! Vehicle has been added!
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2}}>
                                        {activeStep !== 0 && (
                                            <Button
                                                onClick={handleBack} >
                                            Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                        >
                                            {activeStep === stepsLabel.length - 1 ? 'Submit' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                    {/* End Stepper Content */}
                </Container>
        </ThemeProvider>
    );
};


export default MainStepper;
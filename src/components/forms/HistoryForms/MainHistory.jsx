import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import OwnerHistoryCopy from './OwnerHistoryCopy'
// import AccidentHistory from './AccidentHistory'
// import RepairHistory from './RepairHistory'
// import ShowingsHistory from './ShowingsHistory'



const MainHistory = () => {
    const [expanded, setExpanded] = useState('panel1');



    // Begin Accordion ========================================================================================
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    // End Accordion ========================================================================================



    return (
        <React.Fragment>
            <Paper elevation={5} style={{ padding: 15, backgroundColor: "rgb(247 247 247 / 87%)" }}>
                <Typography component="h1" variant="h5">
                    Vehicle History
                </Typography>
                <Accordion sx={{ mt: 2 }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Previous Owners</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* *****Import***** */}
                        <OwnerHistoryCopy />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Previous Accidents</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        {/* *****Import***** */}
                        {/* <AccidentHistory /> */}
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Previous Maintance & Repairs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* *****Import***** */}
                        {/* <RepairHistory /> */}
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography>Previous Showings & Awards</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* *****Import***** */}
                        {/* <ShowingsHistory /> */}
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </React.Fragment>
    );
}
export default MainHistory;
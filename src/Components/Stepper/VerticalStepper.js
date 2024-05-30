
import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import Typography from '@mui/material/Typography';
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/system';

const steps = [
    {
        title: 'Arrived at USPS Facility',
        description: 'Charleston, SC 29407',
    },
    {
        title: 'Arrived at Post Office',
        description: 'Charleston, SC 29407',
    },
    {
        title: 'Sorting Complete',
        description: 'Charleston, SC 29407',
    },
    {
        title: 'Out for Delivery',
        description: 'Charleston, SC 29407',
    }
];

const DottedStepConnector = styled(StepConnector)(({ theme }) => ({
    '&.MuiStepConnector-vertical': {
        marginLeft: 8,
        '& .MuiStepConnector-line': {
            borderColor: 'red',
            borderLeftStyle: 'dotted',
            borderLeftWidth: '3px',
            minHeight: 10,
            borderLeftImage: 'linear-gradient(to bottom, red 50%, rgba(255,255,255,0) 50%) 1 100%',
            borderLeftImageSlice: 1,
        },
    },
}));

const CustomStepIconRoot = styled('div')(({ ownerState }) => ({
    color: 'red',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: 'blue',
    }),
    '& .CustomStepIcon-circle': {
        width: 16,
        height: 16,
        borderRadius: '50%',
        border: '2px solid currentColor',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '& .CustomStepIcon-completedIcon': {
        color: 'red',
        zIndex: 1,
        fontSize: 12,
    },
}));

function CustomStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
            <div className="CustomStepIcon-circle">
                {completed && <Check className="CustomStepIcon-completedIcon" />}
            </div>
        </CustomStepIconRoot>
    );
}

const VerticalStepper = () => {
    const activeStep = -2;
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'start', gap: 2, width: 615, height: 250 }}>
            <Box sx={{ maxWidth: 100, textAlign: 'right' }}>
                {steps.map((step, index) => (
                    <Box key={index} sx={{ mt: 2, mb: 6 }}>
                        <Typography variant="body2" sx={{ marginLeft: '10px', fontFamily: 'Poppins', fontWeight: 400, fontSize: 14, color: '#5F5A6B' }}>
                            10:52 PM
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box sx={{ maxWidth: 400 }} className="vertical-stepper">
                <Stepper orientation="vertical" activeStep={steps.length - 1 - activeStep} connector={<DottedStepConnector />}>
                    {[...steps].reverse().map((step, index) => (
                        <Step key={index}>
                            <StepLabel StepIconComponent={CustomStepIcon}>
                                <Typography variant="subtitle1" sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 14, color: '#5F5A6B' }}>
                                    {step.title}
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 10, color: '#9EA3A2' }}>
                                    {step.description}
                                </Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </Box>
    );
};

export default VerticalStepper;

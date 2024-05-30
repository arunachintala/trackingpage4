import * as React from 'react';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState('Preview tracking page');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <FormGroup
                row
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel
                    value="Preview tracking page"
                    control={
                        <Radio
                            checked={value === 'Preview tracking page'}
                            onChange={handleChange}
                            sx={{
                                color: '#D54029',
                                '&.Mui-checked': {
                                    color: '#D54029',
                                },
                            }}
                        />
                    }
                    label="Preview tracking page"
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        fontSize: '12px',
                        lineHeight: '18.01px',
                        color: '#5F5A6B',
                    }}
                />
                <FormControlLabel
                    value="Preview tracking widget"
                    control={
                        <Radio
                            checked={value === 'Preview tracking widget'}
                            onChange={handleChange}
                            sx={{
                                color: '#D54029',
                                '&.Mui-checked': {
                                    color: '#D54029',
                                },
                            }}
                        />
                    }
                    label="Preview tracking widget"
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        fontSize: '12px',
                        lineHeight: '18.01px',
                        color: '#5F5A6B',
                    }}
                />
            </FormGroup>
        </FormControl>
    );
}

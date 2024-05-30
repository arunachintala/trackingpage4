
import React from 'react';
import drop from './drop.svg';
import './Drag.css';

function Drag() {
    return (
        <div className='container' style={{
            border: '1px dotted #454545',
            borderRadius: '4px',
            padding: '20px',
            width: '186px',
            height: '186px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '21px',
            background: 'white'
        }}>
            <img src={drop} alt="nologo" style={{ width: '34px', height: '34px' }}></img>
            <p style={{ margin: 0 }}>Drag and Drop here</p>
            <p style={{ margin: 0 }}>or</p>
            <button style={{
                width: '135px',
                height: '40px',
                borderRadius: '4px',
                padding: '10px',
                backgroundColor: '#D54029',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
            }}>Select File</button>
        </div>
    );
}

export default Drag;

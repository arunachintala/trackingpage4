import React from 'react'
import VerticalStepper from '../Stepper/VerticalStepper';

function Deliverydetails() {
    return (
        <div style={{ paddingTop: '30px' }}>
            <div style={{ color: '#121114', backgroundColor: '#F5F8F8', borderRadius: '6px 6px 0px 0px', border: '1px solid #D9D9D9 ', display: 'flex', flexDirection: 'column', height: '40px' }}>
                <div style={{ paddingleft: '5px', paddingTop: '3px', }}>
                    <p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px', lineHeight: '21px', margin: '8px' }}>May 16, 2024</p>
                </div >
            </div>
            <div style={{ color: '#121114', backgroundColor: 'white', border: '1px solid #D9D9D9 ', display: 'flex', flexDirection: 'column', height: '250px' }}>
                <VerticalStepper />
            </div>
            <div style={{ color: '#121114', backgroundColor: '#F5F8F8', border: '1px solid #D9D9D9 ', display: 'flex', flexDirection: 'column', height: '25px' }}>
                <p style={{ paddingLeft: '10px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px', lineHeight: '21px' }}>May 15, 2024</p>
            </div>
        </div>
    )
}
export default Deliverydetails;
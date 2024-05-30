import React from 'react';
import { Card } from 'antd';
import box from '../../assets/Vector.png';
import phone from '../../assets/phone.png';

function AddressBox() {
    return (
        <Card style={{ borderRadius: '0px', marginTop: '20px', backgroundColor: '#F5F8F8', justifyContent: 'flex-end', left: '59px', width: '693px' }}>
            <div style={{ color: "#121114", fontFamily: 'Poppins', fontWeight: '500', fontSize: '22px', lineHeight: '33px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <p>Contact Information</p>
                <div style={{ color: '#5F5A6B' }}>
                    <img src={box} alt="logo" />
                    <span style={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> support@godash.ai</span>
                </div>
                <div style={{ color: '#5F5A6B' }}>
                    <img src={phone} alt="logo" />
                    <span style={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> 1800097866</span>
                </div>
            </div>
        </Card>
    );
}

export default AddressBox;

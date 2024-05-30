
import Card6 from '../Card6/Card6';
import React from 'react';
import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar/index';
import './Page6.css';

function Page6() {
    return (
        <div >
            <div className="container"  >
                <Navbar />
                <div style={{ border: "1px solid white", backgroundColor: '#F5F8F8', display: 'flex', flexDirection: 'row' }}>
                    <Sidebar />
                    <div style={{ border: "1px solid white", fontFamily: 'Poppins', fontWeight: '600', justifyContent: 'flex-start', fontSize: '24px', lineHeight: '36px', backgroundColor: '#F5F8F8' }}>
                        <p style={{ position: 'absolute', paddingLeft: '40px', top: '84px' }}>
                            Customise your tracking page
                        </p>
                    </div>
                    <Card6 />


                </div>
                <div style={{ position: 'absolute', top: '1269px', left: '1269px', fontWeight: '400', fontSize: '12px', lineHeight: '18px' }}>
                    <p>Powered by Zippyy</p>
                </div>
            </div>
        </div>
    );
}

export default Page6;

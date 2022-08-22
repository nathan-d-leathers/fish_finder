import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';


function Footer(){

    return (
        <div>
            <MDBFooter className='text-center text-lg-left'>
                <MDBContainer className='p-4'>
                    
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    Saltydog1999 Designs.
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer
import React from 'react';
import SplashImage from '../components/SplashImage';

import {MDBContainer} from 'mdb-react-ui-kit'

function HomePage() {

    return (
        
        <div className="home-page">
            <SplashImage />
            <MDBContainer >
                <h1>Welcome to home page!!</h1>
            </MDBContainer>
        </div>

    )
}

export default HomePage
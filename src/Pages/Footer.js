import React from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter style={{background: '#131316'}} className='text-center text-lg-left text-white'>
            <div className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                &copy; {new Date().getFullYear()} Copyright {'Jonathan Lindqvist'}
            </div>
        </MDBFooter>
    );
}
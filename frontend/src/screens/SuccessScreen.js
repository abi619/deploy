import React from 'react'
import {Alert, Image} from 'react-bootstrap'


const SuccessScreen = () => {
    return (
        // <div className= 'mt-3 p-3 parent-container'>
        //     <Alert className='text-center' variant= 'success'>congratulations!! your registration is succesfull🎉🎉</Alert>
        // </div>
        <div className="successcontainer">
        <div className="avatar">
            <div className="content">
                <Image src="/images/successimage.png" className='img' />
            </div>
            <div className='bottom2' />
        </div>
    </div>
    )
}

export default SuccessScreen

import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Form, Button, Row, Col, Alert, Image} from 'react-bootstrap'
import {otpAction} from '../actions/loginAction'

const OtpScreen = ({history}) => {
    const [newOtp, setNewOtp] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userNumber, userEmail} = userLogin
    const {userInfo} = userLogin
    const userOtp = useSelector(state => state.userOtp)
    const {succeed, error} = userOtp
    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(otpAction(userNumber, newOtp, userEmail))
    }
    useEffect(() => {
        if(succeed) {
            history.push('/success')
        }
    }, [succeed, history])
    return (
        // <div className= 'mt-3 parent-container'>
        //     <div className= 'home-space'>
        //     <h2>Otp Verify</h2>
        //         {error && (
        //             <Alert className='text-center' variant= 'danger'>{error}</Alert>
        //         )}   
        //     </div>
        //     <div className="d-flex align-items-center justify-content-center box">
        //     <Form className= 'p-3'>
        //         <Row>
        //             <Col md={8}>
        //                 <Form.Group className="mb-3" controlId="formBasicEmail">
        //                     <Form.Label>pls check your phone for otp</Form.Label>
        //                     <Form.Control type="number" placeholder="Enter the otp" onChange= {(e) => setNewOtp(e.target.value)}/>
        //                 </Form.Group>
        //             </Col>
        //         </Row>
        //         <Button onClick= {(e) => submitHandler(e)}>verify🚀</Button>
        //     </Form>
        //     </div> 
        // </div>

        <div className="otp-parent-container p-3">
      {/* <h2 className="home-space">Login</h2> */}
      {/* <h2>login</h2> */}
     <div className="otp-container">
        {error && (
            <Alert className='text-center' variant= 'danger'>{error}</Alert>
        )}   
     </div>
      <div className="d-flex align-items-center justify-content-center box">
          <Form className="p-3">
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label className='pl-3' style={{marginLeft: "4px", color: "black"}}>Check your phone for otp</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter the OTP"
                      onChange= {(e) => setNewOtp(e.target.value)}
                      style={{marginBottom: "4px"}}
                    />
              </Form.Group> 
              <Button size="lg"  style={{color:"white", backgroundColor: "black", borderLeftColor: "black", borderRightColor: "black", borderTopColor: "black", borderBottomColor: "black", width: "100%", fontSize: 18, marginTop: 24  }}  onClick={(e) => submitHandler(e)}>lets go</Button>
          </Form>
          {console.log(userEmail)}
      </div>
    </div>
    )
}

export default OtpScreen

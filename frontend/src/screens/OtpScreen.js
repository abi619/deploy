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
        <div className="otp-parent-container p-3">
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
              <Button size="lg"  style={{color:"white", backgroundColor: "black", borderLeftColor: "black", borderRightColor: "black", borderTopColor: "black", borderBottomColor: "black", width: "100%", fontSize: 18, marginTop: 24  }}  onClick={(e) => submitHandler(e)}>Verify</Button>
          </Form>
          {console.log(userEmail)}
      </div>
    </div>
    )
}

export default OtpScreen

import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Form, Button, Row, Col, Alert} from 'react-bootstrap'
import {otpAction} from '../actions/loginAction'

const OtpScreen = ({history}) => {
    const [newOtp, setNewOtp] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userNumber} = userLogin
    const userOtp = useSelector(state => state.userOtp)
    const {succeed, error} = userOtp
    const submitHandler = async (e) => {
        e.preventDefault()
        dispatch(otpAction(userNumber, newOtp))
    }
    useEffect(() => {
        if(succeed) {
            history.push('/success')
        }
    }, [succeed, history])
    return (
        <div className= 'mt-3'>
            <h2 className= 'home-space'>Otp Verify</h2>
            {error && (
                <Alert className='text-center' variant= 'danger'>{error}</Alert>
            )}    
            <Form className= 'p-3'>
                <Row>
                    <Col md={8}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>pls check your phone for otp</Form.Label>
                            <Form.Control type="number" placeholder="Enter the otp" onChange= {(e) => setNewOtp(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button onClick= {(e) => submitHandler(e)}>verify🚀</Button>
            </Form>
        </div>
    )
}

export default OtpScreen

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { userLoginAction } from "../actions/loginAction";
import axios from "axios";

const LoginScreen = ({ history }) => {
  const [num, setNum] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { success, userNumber, error } = userLogin;
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(userLoginAction(num));
  };

  useEffect(() => {
    if (success) {
      history.push("/verify");
    }
  }, [success, history]);

  return (
    <div className="mt-3">
      <h2 className="home-space">Login</h2>
      {success && (
        <Alert className="text-center" variant="success">
          ✔️✔️ otp sent successfully
        </Alert>
      )}
      {error && (
        <Alert className="text-center" variant="danger">
          {error}
        </Alert>
      )}
      <Form className="p-3">
        <Row>
          <Col md={8}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your mobile number"
                onChange={(e) => setNum(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your info with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button onClick={(e) => submitHandler(e)}>lets go🚀</Button>
      </Form>
    </div>
  );
};

export default LoginScreen;

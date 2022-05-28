import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Row, Col, Alert, Container, Image } from "react-bootstrap";
import { userLoginAction } from "../actions/loginAction";
import axios from "axios";

const LoginScreen = ({ history }) => {
  const [num, setNum] = useState("");
  const [uName, setUname] = useState("")
  const [uMail, setUmail] = useState("")
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { success, userNumber, error } = userLogin;
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(userLoginAction(num, uMail));
  };

  useEffect(() => {
    if (success) {
      history.push("/verify");
    }
  }, [success, history]);

  return (
    <div className="parent-container p-3">
      {/* <h2 className="home-space">Login</h2> */}
      {/* {success && (
        <Alert className="text-center" variant="success">
          ✔️✔️ otp sent successfully
        </Alert>
      )} */}
      {/* {error && (
        <Alert className="text-center" variant="danger" style={{display: "block"}}>
          {error}
        </Alert>
      )} */}
      {/* <h2>login</h2> */}
     <div className="image-container">
     <Image src="/images/vybesblack.png" width={150} height={150} rounded className="margin-top-fin ml-3" fluid/>
     </div>
      <div className="d-flex align-items-center justify-content-center box">
          <Form className="p-3">
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label  style={{color: "black"}}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter user name"
                      onChange={(e) => setUname(e.target.value)}
                    />
              </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color: "black"}}>Mobile Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your mobile number"
                      onChange={(e) => setNum(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{color: "black"}}>Email</Form.Label>
                  <Form.Control
                  // as={<div></div>}
                    type="email"
                    placeholder="Enter your mail-id"
                    onChange={(e) => setUmail(e.target.value)}
                    variant="#000"
                    style={{marginBottom: "2px"}}
                  />
                  {/* <br /> */}
                  <Form.Text  style={{color: "#ced4da", fontWeight:"bold"}}>
                    We'll never share your info with anyone else.
                  </Form.Text>
            </Form.Group>
            <Button size="lg"  style={{color:"white", backgroundColor: "black", borderLeftColor: "black", borderRightColor: "black", borderTopColor: "black", borderBottomColor: "black", width: "100%", fontSize: 18, marginTop: 24  }}  onClick={(e) => submitHandler(e)}>lets go🚀</Button>
            <div className="d-grid gap-2 mt-3">
              {error && (
                <Button variant="outline-danger">{error}</Button>
              )}
            </div>
          </Form>
      </div>
    </div>
  );
};

export default LoginScreen;

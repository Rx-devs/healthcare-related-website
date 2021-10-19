import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h3>Create New Account</h3>
            <Form>
                
                <h3>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter Your Email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Your Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Button variant="primary">
                Google Sign In
            </Button>
            <Link to="/login">Already Registered? Click Here</Link>
        </div>
    );
}

export default Register;
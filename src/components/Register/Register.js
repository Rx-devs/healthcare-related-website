import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";


const Register = () => {
    const { user, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="form">
                <h3 className="text-center mb-3">Register Now</h3>
                <Form className="mb-3">
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Receives our update newsletters." />
                    </Form.Group>
                    <Button className="form-control" variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <Button className="form-control mb-3 text-center shadow" onClick={handleGoogleLogin} variant="light">
                    <FontAwesomeIcon className="text-primary" icon={faGoogle} />
                    <span className="ms-2">Register with Google</span>
                </Button>
                <div className="text-center mb-3">
                    <span>Already Registered?</span>
                    <Link to="/login" className="text-decoration-none ms-2 fw-bold">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
    // const { user, signInUsingGoogle } = useFirebase();
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
        <div className="d-flex justify-content-center vh-100">
            <div className="form">
                <Form className=" mb-3">
                
                    <h2 className="text-center">Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Your Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button className="form-control" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <Button className="form-control mb-3 text-center shadow" onClick={handleGoogleLogin} variant="light">
                    <FontAwesomeIcon className="text-primary" icon={faGoogle} />
                    <span className="ms-2">Login with Google</span>
                </Button>
                <div className="text-center mb-3">
                    <Link to="/register" className="text-decoration-none me-2">Create an New Account</Link> <span>To explore more.</span>
                </div>

            </div>
            
        </div>
    );
}

export default Login;
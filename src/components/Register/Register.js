import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
    const { user, signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleRegister,
        error,
        toggleLogin,
        isLogin,
        handleNameChange,
        loginProcess
        } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    const handleToggleLogin = () => {
        loginProcess()
            .then(result => {
                history.push(redirect_url)
                
            });
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="form">
                <h3 className="text-center mb-3">{isLogin ? 'Login' : 'Register'} Now</h3>
                <Form className="mb-3" onSubmit={handleRegister} >
                    { !isLogin && <Form.Group className="mb-3" controlId="formName">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Your Name" required />
                    </Form.Group>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter Your Email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Your Password" required />
                        
                    </Form.Group>
                    { !isLogin && <Form.Group className="mb-3" controlId="formBasicPassword2">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control onBlur={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" />
                    </Form.Group>}
                    <Form.Group className="mb-3">
                        <p className="text-danger fw-bold">{error}</p>
                    </Form.Group>
                    {!isLogin && <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Receives our update newsletters." />
                    </Form.Group>}
                    
                    <Button onClick={handleToggleLogin} className="form-control mb-3" variant="primary" type="submit">
                        {isLogin ? "Login" : "Register"}
                    </Button>
                    <Button className="form-control mb-3 text-center shadow" onClick={handleGoogleLogin} variant="light">
                        <FontAwesomeIcon className="text-primary" icon={faGoogle} />
                        <span className="ms-2">{isLogin ? 'Login' : 'Register'} with Google</span>
                    </Button>

                    <Form.Group className="mb-3 text-danger fw-bold" controlId="formBasicCheckbox2">
                        <Form.Check onClick={toggleLogin} type="checkbox" label="Already Registered? Login Now !!!" />
                    </Form.Group>
                </Form>
                

                {/* <div className="my-4 text-danger fw-bold">
                    <Form.Check onClick={toggleLogin} type="checkbox" label="Already Registered? Login Now !!!" />
                    <span>Already Registered?</span>

                    <button  type="checkbox" onClick={toggleLogin}>Login</button>
                    <Link to="/login" className="text-decoration-none ms-2 fw-bold">Login</Link>
                </div> */}
            </div>
        </div>
    );
}

export default Register;
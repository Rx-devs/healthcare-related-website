import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
    // const { user, logOut } = useFirebase();
    const {user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="py-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Health Care Pvt. Clinic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/blogs">Blogs</NavLink>
                            <NavLink className="link" to="/contacts">Contacts</NavLink>
                            <NavLink className="link" to="/"></NavLink>
                            <NavLink className="link" to="/"></NavLink>
                        
                        </Nav>
                        <Nav className="d-flex align-items-center">
                            { user.email && <span className="text-light me-3">Hi, {user.displayName}</span>}
                            {
                                user.email ?
                                    <Button variant="primary" onClick={logOut}>Logout</Button>
                                    :
                                    <div>
                                        <NavLink className="link" to="/login">Login</NavLink> 
                                        <NavLink className="link" to="/register">Register</NavLink>
                                    </div>
                                    
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
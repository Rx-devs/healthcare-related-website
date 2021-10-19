import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Header = () => {
    // const { user, logOut } = useFirebase();
    const {user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/blogs">Blogs</NavLink>
                            <NavLink to="/contacts">Contacts</NavLink>
                            <NavLink to="/"></NavLink>
                            <NavLink to="/"></NavLink>
                        
                        </Nav>
                        <Nav>
                            { user.email && <span className="text-light">Hi, {user.displayName}</span>}
                            {
                                user.email ?
                                    <button onClick={logOut}>Logout</button>
                                    :
                                    <NavLink to="/login">Login</NavLink>
                                    // <NavLink to="/register">Register</NavLink>
                                    
                            }
                            

                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
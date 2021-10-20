import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import './Contacts.css';
const Contacts = () => {
    return (
        <div className="vh-100">
            <Row className="py-5">
                <Col sm={12} md={6}>
                    <div className="mx-auto w-75">
                    <h2 className="mb-4">Contact info</h2>
                    <h4>Main Campus in New York</h4>
                    <ul>
                        <li> <FontAwesomeIcon icon={faMapMarkerAlt}/> Brooklyn, NY 10036, United States</li>
                        <li> <FontAwesomeIcon icon={faEnvelope}/> medical@medicalclinic.com</li>
                        <li>  <FontAwesomeIcon icon={faPhoneSquare}/> 1-222-3242-2242</li>
                    </ul>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <h2 className="mb-4 px-5">Book an Appointment</h2>
                    <Form  className="px-5">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Control type="tel" placeholder="Phone" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Control placeholder="Address" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    
                            <Form.Control as="textarea" placeholder="Write Message" rows={3} />
                        </Form.Group>

                        
                        <Button variant="outline-primary">Make an Appointment</Button>
                    </Form>
                </Col>
            </Row>
            
        </div>
    );
}

export default Contacts;
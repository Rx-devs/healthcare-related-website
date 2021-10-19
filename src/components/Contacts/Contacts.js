import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import './Contacts.css';
const Contacts = () => {
    return (
        <div>
            <Row>
                <Col sm={6}>
                    <h2 className="mb-3">Contact info</h2>
                    <h4>Main Campus in New York</h4>
                    <ul>
                        <li>Brooklyn, NY 10036, United States</li>
                        <li>medical@medicalclinic.com</li>
                        <li>1-222-3242-2242</li>
                    </ul>
                </Col>
                <Col sm={6}>
                    <h2 className="mb-3">Book an Appointment</h2>
                    <Form>
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

                        {/* <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                        
                        <Button className="" variant="outline-primary">Make an Appointment</Button>
                    </Form>
                </Col>
            </Row>
            
        </div>
    );
}

export default Contacts;
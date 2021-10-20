import { faFacebookSquare, faInstagram, faTelegram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="bg-dark text-light py-3">
            <Row>
                <Col ms={12} md={3}>
                    <div className="text-center mb-2">
                        Call us
                        <span className="ms-3"><FontAwesomeIcon icon={faPhoneSquareAlt} /> +1-222-3242-2242 </span>
                    </div>
                </Col>
                <Col ms={12} md={6}>
                    <p className="mb-2 text-center">Privacy Policy of Health Care Pvt. Clinic - RxDevs © 2021 , All Rights Reserved</p>
                </Col >
                <Col ms={12} md={3}>
                    <div className="text-center">
                        <FontAwesomeIcon className="me-3" icon={faFacebookSquare} />
                        <FontAwesomeIcon className="me-3" icon={faTwitterSquare} />
                        <FontAwesomeIcon className="me-3" icon={faInstagram} />
                        <FontAwesomeIcon className="me-3" icon={faTelegram} />
                
                    </div>
                </Col>
                
            </Row>
            
        </div>
    );
}

export default Footer;
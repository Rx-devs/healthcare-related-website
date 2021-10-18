import React from "react";
import { Button, Card, Col } from "react-bootstrap";
const Service = (props) => {
    const { name, img, description } = props.service;
    console.log(props)
    return (
        <div>
            <Col className="h-100">
                <Card className="h-100">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="outline-dark">See Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default Service;
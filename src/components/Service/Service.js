
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                    </Card.Body>
                    <Card.Footer className="border-0">
                    <Button>
                        <Link to="/service details"  className="text-light text-decoration-none">See Details</Link>
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
}

export default Service;
import React from "react";
import { Card, Col } from "react-bootstrap";
const Blog = (props) => {
    const { name, img, description } = props.blog;
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
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Col>
            
        </div>
    );
}

export default Blog;
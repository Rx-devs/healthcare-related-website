import React from "react";
import { Card } from "react-bootstrap";
const NotFound = () => {
    return (
        <div className="text-light vh-100">
            <Card className="bg-danger w-25 mx-auto text-center
            my-5 p-3">
                <Card.Title>
                <h1>404</h1>
            
                </Card.Title>
                <Card.Body>
                <h3>Nothing Found !!!</h3>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default NotFound;
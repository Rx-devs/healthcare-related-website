import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";


const ServiceDetails = () => {
    let { serviceId } = useParams();
    console.log(serviceId)
    
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleServiceDetails, setSingleServiceDetails] = useState({});

    useEffect(() => {
        fetch("/fakeData.json")
          .then((res) => res.json())
          .then((data) => setServicesDetails(data));
      }, []);


    useEffect(() => {
        const serviceFound = servicesDetails.find(service => service.id == serviceId);
        setSingleServiceDetails(serviceFound);
    }, [servicesDetails]);
    
    
    return (
        <div>
            <h2 className="text-center my-3">Service Details</h2>
            <Container className="d-flex justify-content-center mb-4">
                <Card className="h-100 w-75">
                    <Card.Img variant="top" src={singleServiceDetails?.img} />
                    <Card.Body>
                        <Card.Title className="fw-bold">{singleServiceDetails?.name}</Card.Title>
                        <Card.Text>
                            {singleServiceDetails?.description}
                            {singleServiceDetails?.moreDetails}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}
export default ServiceDetails;
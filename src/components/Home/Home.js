import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
        
    }, [])
    return (
        <div className="mb-4">
            {/* Slider */}
            <Banner></Banner>
            {/* Services */}
            <Container>
                <h2 className="mb-3 text-center">Our Services</h2>
                <Row xs={1} md={3} className="g-3">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.key}
                    
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Home;
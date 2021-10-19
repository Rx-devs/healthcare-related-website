import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
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
        <div>
            {/* Slider */}
            <Banner></Banner>
            {/* Services */}
            <h2 className="mb-3 text-center">Our Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        service={service}
                        key={service.key}
                    
                    ></Service>)
                }
            </Row>
        </div>
    );
}

export default Home;
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service  from "../Service/Service";
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
        
    }, [])
    return (
        <div>
            {/* Banner */}

            {/* Services */}
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
import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/slide-img-1.jpg";
import banner2 from "../../images/slide-img-2.jpg";
import banner3 from "../../images/slide-img-3.jpg";
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel fade className="mb-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100 slidingImg"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark fw-bold">
                        <p>Entrust your health our doctors</p>
                        <h3>Medical excellence every day.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slidingImg"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-dark fw-bold">
                        <p>Entrust your health our doctors</p>
                        <h3>The Hospital of the Future, Today</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slidingImg"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>Entrust your health our doctors</p>
                        <h3>Healthcare just for kids. <br/>
                            Saving children.
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Banner;
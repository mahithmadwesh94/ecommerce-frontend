import { Carousel } from "react-bootstrap"
import "./slider.css";
import banner1 from "../../images/banner1.png"
import banner2 from "../../images/banner2.png"

const Slider = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item interval={2000} >
                <div className="d-flex justify-content-around carousel1">
                    <img
                        className="carousel-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <div className="d-flex flex-column align-items-center justify-content-center banner-caption text-light">
                        <h1>Winter Sale</h1>
                        <p>All winter collection and casual clothes at 50%</p>
                    </div>
                </div>

            </Carousel.Item>


            <Carousel.Item interval={2000} >
                <div className="d-flex justify-content-around ">
                    <img
                        className="carousel-img"
                        src={banner2}
                        alt="First slide"
                    />
                    <div className="d-flex flex-column align-items-center justify-content-center banner-caption text-dark">
                        <h1>Corporate Sale</h1>
                        <p>All Office Collection and wear at 35%</p>
                    </div>
                </div>

            </Carousel.Item>


            <Carousel.Item interval={2000} >
                <div className="d-flex justify-content-around bg-dark">
                    <img
                        className="carousel-img"
                        src={banner2}
                        alt="First slide"
                    />
                    <div className="d-flex flex-column align-items-center justify-content-center banner-caption text-light">
                        <h1>Corporate Sale</h1>
                        <p>All Office Collection and wear at 35%</p>
                    </div>
                </div>

            </Carousel.Item>


        </Carousel>
    )
}

export default Slider

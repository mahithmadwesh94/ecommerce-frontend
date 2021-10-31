import Topbar from "../components/topbar/Topbar";
import Footer from "../components/Footer/Footer";
import PopularProduct from "../components/popularProduct/popularProduct";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


const ProductListPage = () => {
    const location = useLocation();
    const cat = location.pathname.split("product/")[1];
    console.log(location, cat)
    const [filter, setFilter] = useState();
    const [sort, setSort] = useState('newest');
    const [productData, setProductData] = useState([]);

    //call the axios part here to filter based on the products adn to show here
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `https://mcommerce-backend.herokuapp.com/api/products?category=${cat}` : 'https://mcommerce-backend.herokuapp.com/api/products/')
                setProductData(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts();

    }, [cat])

    useEffect(() => {
        cat && setProductData(
            productData.filter((item) => Object.entries(filter).every(([key, value]) => item[key].includes(value)))
        )
    }, [filter])


    const handleChange = (e) => {
        const value = e.target.value;
        console.log(e.target.name, e.target.value)
        if (value) {
            setFilter({
                ...filter,
                [e.target.name]: value
            })
        }



    }

    return (
        <>
            <Topbar />
            <Container fluid>
                <Row>
                    <Col lg={4}>
                        <div className="d-flex align-items-center mt-3">
                            <span><h3>Filter Products:</h3></span>
                            <span> <Form.Select name="color" onChange={handleChange} size="sm" className="ms-2">
                                <option >Color</option>
                                <option value="black">Black</option>
                                <option value="gray">Gray</option>
                                <option value="green">Green</option>
                            </Form.Select></span>
                            <span> <Form.Select name="size" onChange={handleChange} size="sm" className="ms-3">
                                <option>Size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </Form.Select></span>
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className="d-flex align-items-center justify-content-end mt-3">
                            <span><h3>Sort:</h3></span>
                            <span> <Form.Select name="sort" onChange={e => setSort(e.target.value)} size="sm" className="ms-2">
                                <option value="newest">Newest</option>
                                <option value="desc">Oldest</option>
                                <option value="asc">Low to High</option>
                            </Form.Select></span>
                        </div>

                    </Col>

                </Row>

            </Container>
            <Container fluid>
                <Row>


                    {
                        productData.map((item) => (
                            <Col lg={4} id={item._id}>
                                <PopularProduct item={item} id={item._id} img={item.img} />
                            </Col>

                        ))
                    }
                </Row>
            </Container>

            <Footer />
        </>
    )
}

export default ProductListPage

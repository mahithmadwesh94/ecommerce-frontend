import React from 'react'
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/Footer/Footer";
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router';
import { publicRequest } from '../requestMethod';
import { addToCart } from '../store';
import { connect } from 'react-redux';

const ProductPage = (props) => {
    const location = useLocation();
    const id = location.pathname.split("product/")[1]
    const [currentProduct, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            const res = await publicRequest.get(`products/find/${id}`);
            setProduct(res.data)
        }
        getProduct();
    }, [id])


    const handleAddToCart = () => {
        //add to cart
        props.addItemToCart(currentProduct, size, color, quantity);
    }

    return (
        <div>
            <Topbar />
            <Container fluid>
                <Row className="mt-3">
                    <Col lg={4} md={4} sm={12}>
                        <img src={currentProduct.img}
                            alt="" className="productImage w-75 ms-5 ps-5" />
                    </Col>
                    <Col lg={8} md={8} sm={12} className="">
                        <Row >
                            <h1>{currentProduct.title}</h1>
                        </Row>
                        <Row >
                            <p className="w-75">It is a long established fact that a reader will be distracted by the readable content of a page
                                when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        </Row>
                        <Row>
                            <h3>${currentProduct.price}</h3>
                        </Row>
                        <Row>
                            <Col>
                                <div className="d-flex align-items-center">
                                    <span><h3>Color:</h3></span>
                                    <span> <Form.Select onChange={e => setColor(e.target.value)} size="sm" className="ms-2">
                                        <option value="black">Black</option>
                                        <option value="gray">Gray</option>
                                        <option value="green">Green</option>
                                    </Form.Select></span>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex align-items-center">
                                    <span><h3>Size:</h3></span>
                                    <span> <Form.Select onChange={e => setSize(e.target.value)} size="sm" className="ms-2">
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </Form.Select></span>
                                </div>
                            </Col>

                            <Col>
                                <div className="d-flex align-items-center">
                                    <span><h3>Quantity:</h3></span>
                                    <span> <Form.Control onChange={e => setQuantity(parseInt(e.target.value))} size="sm" min={1} defaultValue={1} type="number" placeholder="1" /></span>
                                </div>
                            </Col>
                            <Col>
                                <button onClick={handleAddToCart} className="productAddToCartButton" style={{ width: '150px', height: '50px', border: '2px solid green', cursor: 'pointer' }}>ADD TO CART</button>
                            </Col>
                        </Row>

                        <Row>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (item, size, color, quantity) => dispatch({ type: addToCart, payload: { ...item, size, color, quantity } })
    }
}

export default connect(null, mapDispatchToProps)(ProductPage)

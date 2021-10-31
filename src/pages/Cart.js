/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@restart/ui/esm/Button'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Toast, ToastContainer } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'
import Topbar from '../components/topbar/Topbar';
import { connect } from 'react-redux';
import { emptyCart, removeFromCart } from '../store';
import StripeCheckout from 'react-stripe-checkout';
const STRIPE_KEY = 'pk_test_51Jp89rSJwxIB6nkWKj0jqeDaiBMWFGZF7N8TaORtz2qbPLqHHgKpQQB9ljhdwCIebhwTVku33vUf6lA3AvThxq5f00XG4uYR31'

const Cart = (props) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [stripeToken, setStripeToken] = useState(null);
    const [show, setShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setCartProducts(props.cart)

    }, [])

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const showMessge = () => {
            if (stripeToken) {
                setShow(true);
                setCartProducts([])
                props.emptyCart()
                setTimeout(() => {
                    history.push("/")
                }, 3000)

            }
        }
        showMessge();
    }, [stripeToken])
    console.log(stripeToken)
    return (
        <>
            <Topbar />
            <Container fluid>
                <Row>

                </Row>
                <Row>
                    <div className="d-flex justify-content-center mt-3">
                        <h1>YOUR BAG</h1>
                    </div>
                </Row>
                <Row>
                    <Col lg={4} md={4} className="d-flex justify-content-center">
                        <NavLink to="/" className="link"><button style={{ width: '200px', height: '50px', border: '2px solid green', cursor: 'pointer' }}>CONITNUE SHOPPING</button></NavLink>
                    </Col>
                    <Col lg={4} md={4} className="d-flex justify-content-center">
                        <Link className="me-3">Shopping Bag ({props.quantity})</Link>
                        <Link>Your Wishlist (0)</Link>
                    </Col>
                    <Col lg={4} md={4} className="d-flex justify-content-center">
                        <button style={{ width: '150px', height: '50px', border: '2px solid green', cursor: 'pointer', color: 'white', backgroundColor: 'black' }}>CHECKOUT NOW</button>
                    </Col>

                </Row>
                <Row >



                    <Col lg={8}>
                        {cartProducts.map(item => (

                            <div id={item._id} className="d-flex align-items-center mt-3 border">
                                <div className="pe-5">
                                    <Card.Img style={{ width: '300px', height: '300px', objectFit: "cover" }} src={item.img} />
                                </div>
                                <div>
                                    <Card.Title><b>Product</b>: {item.title}</Card.Title>
                                    <Card.Title><b>ID</b>: {item._id}</Card.Title>
                                    <Card.Title><b>Color</b>: {item.color}</Card.Title>
                                    <Card.Title><b>Size</b>: {item.size}</Card.Title>
                                    <Card.Title><b>Price</b>: ${item.price}</Card.Title>

                                    {/*   <Button variant="warning" onClick={(item) => {

                                        props.removeFromCart(item)
                                    }}>Remove</Button>*/}
                                </div>
                            </div>

                        ))}
                    </Col>



                    <Col lg={4} className="mt-3">
                        <h3>SUMMARY</h3>
                        <p>Total: ${props.total}</p>
                        <p>Estimated: ${props.total}</p>
                        <p>Shpping Discount: $10</p>
                        <StripeCheckout
                            name="MAHITH"
                            image=""
                            billingAddress
                            shippingAddress
                            description={`Your total is $${props.total}`}
                            amount={props.total * 100}
                            token={onToken}
                            stripeKey={STRIPE_KEY}
                        >
                            <Button style={{ width: '150px', height: '50px', border: '2px solid green', cursor: 'pointer', color: 'white', backgroundColor: 'black' }}>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Col>
                </Row>


                <ToastContainer className="pt-5" position="middle-center">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Success</strong>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're order is on the way!</Toast.Body>
                    </Toast>
                </ToastContainer>

            </Container>
        </>
    )
}

const mapStateToProps = (props) => {
    return props;
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (item) => dispatch({ type: removeFromCart, payload: item }),
        emptyCart: () => dispatch({ type: emptyCart })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart)

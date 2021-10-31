import { Container, Nav, Navbar, Col, Row } from "react-bootstrap"
import "./footer.css";

import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ height: 'auto' }}>
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Row>
                        <Col lg={4}>
                            <Nav className="d-flex flex-column justify-content-start">
                                <h1>MAHITH</h1>
                                <span className="d-block w-100">Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old. Richard McClintock, a Latin professor at
                                </span>
                                <div className="footerLeftIcons d-flex align-items-center mt-2">
                                    <AiFillTwitterCircle style={{ marginRight: 10, cursor: 'pointer' }} />
                                    <AiFillGithub style={{ marginRight: 10, cursor: 'pointer' }} />
                                    <BsPinterest style={{ marginRight: 10, cursor: 'pointer' }} />
                                </div>

                            </Nav>
                        </Col>
                        <Col lg={2}>
                            <Nav className="d-flex flex-column">
                                <h1>Useful Links</h1>
                                <Row>
                                    <Col lg={6} md={6} sm={6}>
                                        <Nav.Link href="#home">Home</Nav.Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <Nav.Link href="#home">SHOP</Nav.Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <Nav.Link href="#home">CART</Nav.Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <Nav.Link href="#home">PRODUCTS</Nav.Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <Nav.Link href="#home">LOGIN</Nav.Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={6}>
                                        <Nav.Link href="#home">REGSITER</Nav.Link>
                                    </Col>
                                </Row>
                            </Nav>
                        </Col>
                        <Col lg={4} className="ms-auto">
                            <Nav className="d-flex flex-column">
                                <h1>Contact</h1>
                                <Row>
                                    <p><MdLocationPin />Yelahanka, Bengaluru-560064</p>
                                </Row>
                                <Row>
                                    <p><BsTelephoneOutboundFill />+91-9237699123</p>
                                </Row>
                                <Row>
                                    <p><AiFillMail />Contact - contact@mshop.com</p>
                                </Row>

                            </Nav>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer

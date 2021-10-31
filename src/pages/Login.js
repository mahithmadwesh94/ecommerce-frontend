import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Form, Row, Toast, ToastContainer } from 'react-bootstrap'
import Topbar from '../components/topbar/Topbar'
import { connect } from 'react-redux'
import { login } from '../store'

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const api_url = "https://mcommerce-backend.herokuapp.com/api/auth";
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(api_url + "/login", {
            username, password
        }).then((res) => {
            props.login(res.data)
        }).catch(err => console.log(err))

    }


    const handleRegister = async (e) => {
        e.preventDefault();
        axios.post(api_url + "/register", {
            username, email, password
        }).then(res => setShow(true)).catch(err => console.log(err))

    }
    return (
        <Container fluid>
            <Topbar />
            <Row >
                <Col lg={6}>
                    <div className="d-flex flex-column align-items-center mt-5">
                        <Row>
                            <h1>SIGN IN</h1>
                        </Row>
                        <Row>
                            <form onSubmit={handleLogin} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                </Form.Group>

                                <button type="submit">
                                    LOGIN
                                </button>
                            </form>
                        </Row>
                    </div>

                </Col>

                <Col lg={6}>
                    <div className="d-flex flex-column align-items-center mt-5">
                        <Row>
                            <h1>REGISTER</h1>
                        </Row>
                        <Row>
                            <form onSubmit={handleRegister}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                </Form.Group>

                                <button type="submit">
                                    REGISTER
                                </button>
                            </form>
                        </Row>
                    </div>

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
                    <Toast.Body>Now Please login with the same credentials!!!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    )
}


const mapStateToProps = (props) => {
    return props;
}


const mapDispatchToProps = dispatch => {
    return {
        login: (userData) => dispatch({ type: login, payload: userData }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

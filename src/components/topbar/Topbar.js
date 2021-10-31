import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import "./topbar.css";
import { FaSearch } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import Badge from '@mui/material/Badge';
import { logout } from "../../store";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";


const Topbar = (props) => {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" variant="light" className="border-bottom">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <NavDropdown title="EN" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">EU</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">IN</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">US</NavDropdown.Item>
                        </NavDropdown>

                        <div className="d-flex align-items-center border">
                            <input type="text" placeholder="Search" className="searchInput" />
                            <FaSearch />
                        </div>
                    </Nav>

                    <Nav className="mx-auto">
                        <Link to="/" className="link"><h1 className="font-weight-bold">MAHITH</h1></Link>
                    </Nav>

                    <Nav className="ms-auto d-flex align-items-center">
                        {Object.keys(props.user).length ? <span className="link topbarRightLink" onClick={props.logoutUser}>LOGOUT</span> : <NavLink to='/login' className="link topbarRightLink">LOGIN</NavLink>}

                        <NavLink to='/cart' className="link topbarRightLink">
                            <div className="topbarRightLink topbarRightIcon">
                                <Badge badgeContent={props.quantity} color="secondary">
                                    <GrCart />
                                </Badge>


                            </div>
                        </NavLink>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

// mapStateToProps
const mapStateToProps = (props) => {
    return props
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch({ type: logout })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Topbar)

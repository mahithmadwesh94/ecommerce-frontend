import { Card, Col, Container, Row } from "react-bootstrap"
import "./popularProducts.css"
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import PopularProduct from "../popularProduct/popularProduct";
import { popularProductsData } from "../../data"

const PopularProducts = ({ img }) => {
    return (
        <Container fluid>
            <Row>


                {
                    popularProductsData.map((item) => (

                        <Col lg={4}>
                            <PopularProduct id={item.id} img={item.image} />
                        </Col>

                    ))
                }
            </Row>
        </Container>

    )
}

export default PopularProducts

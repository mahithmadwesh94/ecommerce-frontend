import { Card, Col, Container, Row } from "react-bootstrap"
import { categoryData } from "../../data"
import CategoryItem from "../CategoryItem/CategoryItem"
import "./categories.css"

const Categories = () => {
    return (
        <Container fluid>
            <Row>
                {categoryData.map(item => (
                    <Col lg={4} id={item.id}>
                        <CategoryItem img={item.image} title={item.title} cat={item.cat} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Categories

import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./categoryItem.css"

const CategoryItem = ({ img, title, cat }) => {
    return (

        <Card className="category mt-5 p-2">
            <Card.Img src={img} className="cat-img" alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column jusity-content-center align-items-center">
                <div className="card-overlay-text">
                    <h3 >{title}</h3>

                    <p><Link to={`/products/${cat}`}><button className="categoryItemButton">SHOP NOW</button></Link></p>
                </div>

            </Card.ImgOverlay>
        </Card>
    )
}

export default CategoryItem

import "./popularProduct.css";
import { Card } from "react-bootstrap"
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../store";


const PopularProduct = (props) => {
    const history = useHistory();



    return (
        <Card className="category mt-5 p-2 hoveraction">
            <Card.Img src={props.img} className="cat-img p-2" alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column jusity-content-center align-items-center">

                <div className="d-flex justify-content-between text-dark my-auto displayIcon">
                    <AiOutlineShoppingCart onClick={() => Object.keys(props.user).length ? props.addToCartIcon(props.item) : history.push('/login')} className="popularProductIcon" /> <Link to={`/product/${props.id}`} style={{ color: 'black' }}><AiOutlineSearch className="popularProductIcon" /></Link> <AiOutlineHeart className="popularProductIcon" />

                </div>

            </Card.ImgOverlay>
        </Card>
    )
}

const mapStateToProps = (props) => {
    return props
}

const mapDispatchToProps = dispatch => {
    return {
        addToCartIcon: (item) => dispatch({ type: addToCart, payload: item })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularProduct);

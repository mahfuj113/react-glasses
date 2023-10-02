import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const SingleProductCart = ({product,discount}) => {
    return (
        <div className="card  card-compact shadow-xl">
            {/* <h2>single cart</h2> */}
            {
                discount && product.discount && <div className="badge m-1">{product.discount}% off</div>
            }
             <figure className='h-5/6'>

                <img src={product.image} alt="car!" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">${product.price}</h2>
                <p>{product.name}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-neutral btn-sm" to={`/product/${product.id}`}>Details!</Link>
                </div>
            </div>
        </div>
    )
}

SingleProductCart.propTypes = {
    product: PropTypes.object.isRequired,
    discount: PropTypes.bool
}

export default SingleProductCart
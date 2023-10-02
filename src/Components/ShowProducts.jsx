import PropTypes from 'prop-types'
import SingleProductCart from './SingleProductCart'

const ShowProducts = ({ name, sunglass }) => {
    return (
        <>
            <div className="px-8 py-12">
                <h1 className="text-3xl font-bold">{name}</h1>
                <br />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {
                        sunglass?.map(item => <SingleProductCart key={item.id} product={item} discount></SingleProductCart>)
                    }
                </div>
            </div>
        </>

    )
}

ShowProducts.propTypes = {
    name: PropTypes.string.isRequired,
    sunglass: PropTypes.array.isRequired,
}
export default ShowProducts;
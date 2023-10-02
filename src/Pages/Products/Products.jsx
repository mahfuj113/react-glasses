import { useEffect, useState } from "react";
import ShowProducts from "../../Components/ShowProducts";

const Products = () => {
    const [sunglasses, setSunglasses] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/mahfuj113/react-glasses-database/sunglasses')
            .then(res => res.json())
            .then(data => setSunglasses(data));
    }, [])
    return (
        <div>
            <img src="https://i.ibb.co/4Fm9MgB/image.png" alt="" />
            <ShowProducts name={'Featured Products'} sunglass={sunglasses} />
        </div>
    );
};

export default Products;
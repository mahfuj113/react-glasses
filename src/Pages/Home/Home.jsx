import Banner from "./Banner";
import ShowProducts from "../../Components/ShowProducts";
import About from "../About/About";
import { useEffect, useState } from "react";

const Home = () => {
    const [sunglasses, setSunglasses] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/mahfuj113/react-glasses-database/sunglasses')
            .then(res => res.json())
            .then(data => setSunglasses(data));
    }, [])
    return (
        <div>
            <Banner/>
            <ShowProducts name={'Top rated'} sunglass={sunglasses.slice(5,10)}></ShowProducts>
            <ShowProducts name={'Best sellers'} sunglass={sunglasses.slice(0,5)}></ShowProducts>
            <About/>
        </div>
    );
};

export default Home;
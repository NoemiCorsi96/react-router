import CardProduct from "../components/CardProduct.jsx";
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Productpage() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const endpoint = `https://fakestoreapi.com/products/${id}`
    useEffect(() => {
        console.log(endpoint);
        fetchData(endpoint)

    }, [])
    function fetchData(endpoint) {
        axios.get(endpoint)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
            }).catch(err => {
                console.log(err);

            })
    }
    return (

        <div>
            {product != null ? <CardProduct product={product} /> : <div>Loading...</div>}
        </div>
    )
}
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import AppNav from "../components/AppNav";
import AppFooter from "../components/AppFooter";
export default function Prodottipage() {
    const [products, setProducts] = useState([]);
    function fetchProducts() {
        console.log("Chiamo l'API...");
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => {
                console.error("Errore:", err.message);
            });
    }
    useEffect(fetchProducts, []);
    return (
        <>
            <header>


            </header>
            <main className="container py-4">
                <h1>Prodotti</h1>
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                            <div className="card h-100 text-center">
                                <Link to={`/prodotti/${product.id}`}>
                                    <img src={product.image} className="card-img-top p-3" />
                                </Link>

                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text fw-bold">{product.price} €</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

        </>
    )
}
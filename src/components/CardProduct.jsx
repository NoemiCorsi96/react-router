export default function CardProduct({ product }) {
    return (
        <div className="card p-3 col-4 mx-auto text-center justify-content-center align-items-center my-5">
            <img width={200} src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <h5>Prezzo: {product.price}</h5>
        </div>
    )
}
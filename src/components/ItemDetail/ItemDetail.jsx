import ItemCount from "../ItemCount/ItemCount";


export default function ItemDetail({product , name}) {
  return (
    <div className="d-flex my-5 justify-content-between">
        <img className="img-fluid h-25 w-50 border border-secondary" src={`${product.image}`} alt={`${product.name}`} />
        <div className="w-50 mx-3 d-flex flex-column">
            <h1 className="mx-auto">{product.name}</h1>
            <p className="m-2 fs-4 text-start">{product.description}</p>
            <div className="m-2 d-flex justify-content-around">
                <p>Precio : {product.price.toLocaleString("es-CL")} CLP</p>
                <p>Stock: {product.stock}</p>
            </div>
            <ItemCount initial = {1} stock = {`${product.stock}`} onAdd={" "}/>
        </div>
    </div>
  )
}

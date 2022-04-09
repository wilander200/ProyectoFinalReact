import { useContext } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


export default function Cart() {

  const {cartList, erraseCart, erraseItem, totalPrice} = useContext(CartContext)

  function newOrder (e) {
    console.log(cartList)
  }

  return (
    <div className="container">
      { (cartList.length === 0) ?
        <div>
          <h4 className="h4 m-5">Aun no tiene productos seleccionados...</h4>
          <Link to = '/'>
            <Button variant="outline-dark">Seleccione algún producto aquí</Button>
          </Link>
        </div>
        :
        <div>  
          <div className="row d-flex justify-content-around">
            <h2 className="col-2 h6">PRODUCTO</h2>
            <h2 className="col-2 h6">PRECIO UNITARIO</h2>
            <h2 className="col-2 h6">CANTIDAD</h2>
            <h2 className="col-2 h6">PRECIO TOTAL</h2>
            <h2 className="col-2 h6"></h2>
          </div >
          <div >
            {cartList.map((prods) => 
              <div className="row d-flex justify-content-around my-2" key={prods.id}>
                <p className="col-2 ">{prods.name}</p>
                <p className="col-2 ">{prods.price.toLocaleString("es-CL")} CLP</p>
                <p className="col-2 ">{prods.cantidad}</p>
                <p className="col-2 ">{(prods.cantidad*prods.price).toLocaleString("es-CL")} CLP</p>
                <Button className="col-2 h-75" variant="outline-danger" onClick={() => erraseItem(prods.id)} >Eliminar Item</Button>
              </div>
            ) }
          </div>
          <div>
            <h3> {`Monto total de la compra : ${totalPrice().toLocaleString("es-CL")} CLP`}</h3>
            <Button className="m-3" onClick={erraseCart} variant="outline-danger">Vaciar carrito</Button>
            <Button className="m-3" variant="outline-success" onClick={newOrder}>Generar Orden</Button>
          </div>
        </div>
      }
    </div>
  )
}

import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"


export default function Cart() {

  const {cartList, erraseCart, erraseItem} = useContext(CartContext)


  return (
    <div className="container">
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
            <p className="col-2 ">{prods.price.toLocaleString("es-CL")}</p>
            <p className="col-2 ">{prods.cantidad}</p>
            <p className="col-2 ">{(prods.cantidad*prods.price).toLocaleString("es-CL")}</p>
            <Button className="col-2 " variant="outline-danger" onClick={() => erraseItem(prods.id)} >Eliminar Item</Button>
          </div>
          ) }
        </div>
      <Button onClick={erraseCart} variant="outline-danger">Vaciar carrito</Button>
    </div>
  )
}

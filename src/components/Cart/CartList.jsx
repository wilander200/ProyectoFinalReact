import { Button } from "react-bootstrap";

export default function CartList({cartList, erraseItem, id}) {
  
  
    return (
    <div >
    {cartList.map((prods) => 
      <div className="row d-flex justify-content-around my-2" key={prods.id}>
        <p className="col-2 ">{prods.name}</p>
        <p className="col-2 ">{prods.price.toLocaleString("es-CL")} CLP</p>
        <p className="col-2 ">{prods.quantity}</p>
        <p className="col-2 ">{(prods.quantity*prods.price).toLocaleString("es-CL")} CLP</p>
        { id === null &&
          <Button className="col-2 h-75" variant="outline-danger" onClick={() => erraseItem(prods.id)} >Eliminar Item</Button>
        }
      </div>
    ) }
  </div>
  )
}
